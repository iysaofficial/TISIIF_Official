import Link from "next/link";
import { ambilBerkasKurasi, berkasTampil, type BerkasKurasi } from "@/lib/kurasiApi";
import "./kurasi.css";

/**
 * Berkas kurasi satu edisi, dibaca langsung dari dasbor.
 *
 * ── Kenapa kartu, bukan daftar bernomor butir ─────────────────────────────
 *
 * Bentuk aslinya di dasbor dikelompokkan per butir dan bernomor. Itu bahasa
 * kurator. Pengunjung situs tidak menilai butir; ia mencari satu dokumen dan
 * ingin tahu apakah ada. Karena itu judul kartunya nama dokumennya — "SK
 * Pembentukan Tim Juri" — bukan nama berkasnya. Nama berkas tetap
 * ditampilkan, kecil, karena itu yang akan orang lihat setelah mengunduh.
 *
 * ── Kenapa hanya dokumentasi yang dilencanai ──────────────────────────────
 *
 * Hampir semua berkas di sini administrasi, jadi lencana "Administrasi" pada
 * hampir semuanya tidak memisahkan apa pun — ia cuma kata yang sama berulang.
 * Yang membedakan justru yang sedikit.
 *
 * ── Kenapa dirender di server ─────────────────────────────────────────────
 *
 * Isinya sama untuk semua pengunjung. Dirender di server, halamannya sudah
 * berisi begitu tiba — tidak ada kedipan "Loading…" dan tidak ada keadaan
 * kosong yang harus dibedakan dari keadaan gagal di sisi peramban.
 */
export const revalidate = 3600;

export default async function CurationTahunPage({
  params,
}: {
  params: Promise<{ tahun: string }>;
}) {
  const { tahun } = await params;

  let berkas: BerkasKurasi[] = [];
  let galat = false;
  try {
    berkas = berkasTampil(await ambilBerkasKurasi(tahun));
  } catch {
    galat = true;
  }

  return (
    <section className="kurasi-section">
      <div className="kurasi-container">
        <Link href="/curation" className="kurasi-kembali">
          ← Curation
        </Link>
        <h1>Curation {tahun}</h1>

        {/*
          Gagal memuat dan belum ada isinya sengaja dibedakan. Keduanya
          menampilkan halaman tanpa berkas, tapi yang satu berarti "coba lagi"
          dan yang lain "memang belum ada" — pengunjung yang disuruh menunggu
          untuk sesuatu yang tidak akan datang akan menunggu selamanya.
        */}
        {galat && (
          <p className="kurasi-kabar">
            The document list could not be loaded. Please try again shortly.
          </p>
        )}

        {!galat && berkas.length === 0 && (
          <p className="kurasi-kabar">
            No documents have been published for this edition yet.
          </p>
        )}

        {berkas.length > 0 && (
          <>
            <p className="kurasi-ringkas">{berkas.length} documents</p>
            <div className="kurasi-kartu-grid">
              {berkas.map((f, i) => {
                const isi = (
                  <>
                    {f.jenis === "dokumentasi" && (
                      <span className="kurasi-badge">Dokumentasi</span>
                    )}
                    <h2>{f.slot}</h2>
                    <p className="kurasi-nama">{f.nama}</p>
                  </>
                );
                return f.url ? (
                  <a
                    key={i}
                    className="kurasi-kartu"
                    href={f.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {isi}
                  </a>
                ) : (
                  <div key={i} className="kurasi-kartu">
                    {isi}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
