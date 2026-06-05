export default function Home() {
return (
<main
style={{
background: "#0a0a0a",
minHeight: "100vh",
color: "white",
fontFamily: "Arial"
}}
>
<header
style={{
background: "#111",
padding: "20px",
borderBottom: "2px solid red",
display: "flex",
justifyContent: "space-between",
alignItems: "center"
}}
>
<h1 style={{ color: "red" }}>Mucizevi Kutay</h1>

```
    <button
      style={{
        background: "red",
        color: "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >
      Google ile Giriş
    </button>
  </header>

  <section style={{ padding: "20px" }}>
    <h2>Yeni Bölümler</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          style={{
            background: "#181818",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #333"
          }}
        >
          <div
            style={{
              background: "#2a2a2a",
              height: "180px"
            }}
          />

          <div style={{ padding: "14px" }}>
            <h3>Bölüm {item}</h3>
            <p style={{ color: "#aaa" }}>
              Mucizevi Kutay Bölümü
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
</main>
```

);
}
