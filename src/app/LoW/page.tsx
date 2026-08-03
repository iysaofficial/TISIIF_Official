import Link from "next/link";

export default function LoWPage() {
  return (
    <>
      <div style={{ minHeight: "80vh", padding: "100px 20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <h1 style={{ color: "#1E40AF", marginBottom: "20px", fontSize: "2.5rem" }}>List of Winner</h1>
        <p style={{ color: "#64748b", marginBottom: "30px", maxWidth: "600px", lineHeight: "1.6" }}>
          Please select the year.
        </p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/LoW/2026"
            style={{ padding: "12px 24px", background: "#1E40AF", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "bold", display: "inline-block" }}
          >
            2026
          </Link>
          <Link
            href="/LoW/2027"
            style={{ padding: "12px 24px", background: "#1E40AF", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "bold", display: "inline-block" }}
          >
            2027
          </Link>
        </div>
      </div>
    </>
  );
}
