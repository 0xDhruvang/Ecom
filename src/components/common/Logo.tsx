import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="logo" style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#000",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          J
        </div>
        <span className="logo__subtext" style={{ marginLeft: "10px" }}>
          Elegant Ones
        </span>
      </a>
    </Link>
  );
}
