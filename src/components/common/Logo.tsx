import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="logo" style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "100px",  // Increased the width to accommodate "Elegant"
            height: "40px",
            backgroundColor: "#000",
            borderRadius: "10px",  // Changed to a smaller radius for a rectangle shape
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",  // Adjusted font size for better fit
          }}
        >
          Elegant
        </div>
        <span className="logo__subtext" style={{ marginLeft: "10px" }}>
          Shoes
        </span>
      </a>
    </Link>
  );
}
