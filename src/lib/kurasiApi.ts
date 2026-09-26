/**
 * Berkas kurasi dari API dasbor IYSA.
 *
 * ── Kenapa akronim, bukan id edisi ────────────────────────────────────────
 *
 * Id edisi berganti tiap tahun. Menanamkannya di situs berarti ada dua
 * repositori yang harus disunting berbarengan tiap edisi baru, dan yang lupa
 * salah satunya baru ketahuan saat pengunjung membuka halaman kosong.
 * Akronim + tahun menunjuk satu edisi dan keduanya sudah diketahui penulis
 * situs tanpa membuka dasbor.
 */

export interface Edisi {
  tahun: string;
  nama: string;
  dipin: boolean;
}

export interface BerkasKurasi {
  slot: string;
  /** 'administrasi' | 'dokumentasi' */
  jenis: string;
  nama: string;
  url: string | null;
  /** Kategori lomba yang melahirkan berkas ini; kosong = berlaku semua. */
  kategori: string | null;
  diunggah: string;
}

export interface ButirKurasi {
  nomor: number;
  butir: string;
  berkas: BerkasKurasi[];
}

const API = "https://api-dashboard.iysa.or.id/api/public/v1";
const SERI = "tisiif";

async function ambil(jalur: string) {
  const res = await fetch(`${API}/${SERI}${jalur}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return json.data;
}

/** Edisi yang ada di dasbor, terbaru dulu. */
export async function ambilEdisi(): Promise<Edisi[]> {
  const d = await ambil("/edisi");
  return d?.edisi ?? [];
}

/**
 * Berkas kurasi satu edisi, sudah dikelompokkan per butir.
 *
 * Yang keluar hanya slot yang ditandai boleh disiarkan di dasbor — berkas
 * kurasi juga memuat anggaran, kontak juri, dan daftar peserta, dan tidak
 * semuanya boleh dibaca umum.
 */
export async function ambilBerkasKurasi(tahun: string): Promise<ButirKurasi[]> {
  const d = await ambil(`?tahun=${encodeURIComponent(tahun)}&sections=berkas_kurasi`);
  const seksi = (d?.sections ?? []).find(
    (s: { key: string }) => s.key === "berkas_kurasi",
  );
  return seksi?.isi ?? [];
}

/** Berkas yang berlaku untuk seluruh kategori, bukan satu kategori saja. */
const gabungan = (f: BerkasKurasi) => !f.kategori || f.kategori === "Semua";

/**
 * Daftar berkas yang ditampilkan: rata, tanpa butir, tanpa duplikat kategori.
 *
 * ── Kenapa yang per kategori disembunyikan ───────────────────────────────
 *
 * Sebagian dokumen terbit satu kali per kategori lomba, dan di sebelahnya ada
 * satu berkas gabungan yang isinya mencakup semuanya. Menampilkan semuanya
 * membuat satu butir memakan layar penuh berisi berkas yang bagi pengunjung
 * terlihat sama, dan yang gabungan tenggelam di antaranya.
 *
 * Penyaringannya per SLOT, bukan menyeluruh: kalau sebuah slot ternyata TIDAK
 * punya berkas gabungan, yang per kategori tetap ditampilkan. Menghilangkan
 * keduanya berarti dokumen yang ada menjadi tidak bisa diakses sama sekali.
 *
 * ── Kenapa rata, tanpa pengelompokan butir ───────────────────────────────
 *
 * Nomor butir adalah bahasa kurator, bukan bahasa pengunjung. Yang dicari
 * orang di sini "SK juri ada tidak", bukan "butir tiga isinya apa".
 */
export function berkasTampil(butir: ButirKurasi[]): BerkasKurasi[] {
  const perSlot = new Map<string, BerkasKurasi[]>();
  for (const b of butir ?? []) {
    for (const f of b.berkas ?? []) {
      const daftar = perSlot.get(f.slot) ?? [];
      daftar.push(f);
      perSlot.set(f.slot, daftar);
    }
  }
  const hasil: BerkasKurasi[] = [];
  perSlot.forEach((berkas) => {
    const utama = berkas.filter(gabungan);
    hasil.push(...(utama.length > 0 ? utama : berkas));
  });
  return hasil;
}
