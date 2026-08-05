export default function LoW2026Page() {
  return (
    <>
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
        <h1
          style={{ color: "#1E40AF", marginBottom: "20px", fontSize: "2.5rem" }}
        >
          List of Winner 2026
        </h1>
        <p
          style={{
            color: "#64748b",
            marginBottom: "30px",
            maxWidth: "600px",
            lineHeight: "1.6",
          }}
        >
          Please select the category.
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://drive.google.com/drive/folders/1eiZf7of1X8dIpz9h5nSRQQz0VboAX0yK?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 24px",
              background: "#1E40AF",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Online
          </a>
          <a
            href="https://drive.google.com/drive/folders/1qWdHghIj0Dfb990EQ8U-FeT-jqtwkVhF?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 24px",
              background: "#1E40AF",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Offline
          </a>
        </div>
      </div>
    </>
  );
}
