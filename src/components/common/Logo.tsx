import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="logo" style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#000",
            padding: "5px 10px",
            borderRadius: "10px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Elegant Shoes
        </div>
      </a>
    </Link>
  );
}
