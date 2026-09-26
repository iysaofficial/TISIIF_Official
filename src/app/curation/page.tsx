import Link from "next/link";
import { ambilEdisi, ambilBerkasKurasi } from "@/lib/kurasiApi";

/**
 * Pemilih edisi kurasi.
 *
 * ── Kenapa tahunnya tidak ditulis di sini ─────────────────────────────────
 *
 * Halaman List of Winner di sebelah menulis "2026" dan "2027" sebagai dua
 * tombol tetap, dan itulah yang membuat tiap edisi baru menuntut satu commit.
 * Edisi kurasi datang dari dasbor: `/edisi` menjawab edisi apa saja yang ada,
 * dan yang baru muncul sendiri.
 *
 * Yang ditampilkan hanya edisi yang BENAR-BENAR punya berkas terbit. Sebuah
 * edisi bisa sudah ada di dasbor dan belum punya satu berkas pun yang
 * ditandai boleh disiarkan — tombol yang membuka halaman kosong lebih buruk
 * daripada tombol yang tidak ada.
 *
 * ── Kenapa dirender di server ─────────────────────────────────────────────
 *
 * Daftarnya sama untuk semua pengunjung dan berubah beberapa kali setahun.
 * `revalidate` sejam berarti pengunjung tidak menunggu dua permintaan API
 * sebelum melihat apa pun, sementara edisi baru tetap muncul tanpa deploy.
 */
export const revalidate = 3600;

const GAYA_TOMBOL: React.CSSProperties = {
  padding: "12px 24px",
  background: "#1E40AF",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  display: "inline-block",
};

async function edisiBerisi(): Promise<string[]> {
  try {
    const semua = await ambilEdisi();
    const hasil: string[] = [];
    for (const e of semua) {
      if (!e.tahun) continue;
      const butir = await ambilBerkasKurasi(e.tahun).catch(() => []);
      if (butir.length > 0) hasil.push(e.tahun);
    }
    return hasil;
  } catch {
    /* Halaman ini tidak boleh ikut mati hanya karena API-nya tak terjangkau. */
    return [];
  }
}

export default async function CurationPage() {
  const tahun = await edisiBerisi();

  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "100px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ color: "#1E40AF", marginBottom: "20px", fontSize: "2.5rem" }}>
        Curation
      </h1>
      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        {tahun.length > 0
          ? "Please select the year."
          : "No documents have been published yet."}
      </p>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {tahun.map((t) => (
          <Link key={t} href={`/curation/${t}`} style={GAYA_TOMBOL}>
            {t}
          </Link>
        ))}
      </div>
    </div>
  );
}
