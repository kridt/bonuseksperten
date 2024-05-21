import React from "react";
import { useMediaQuery } from "react-responsive";

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  if (isMobile) {
    return (
      <nav
        style={{
          backgroundColor: "#000336",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 1em",
        }}
      >
        <div
          style={{
            maxWidth: "150px",
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src="/logo.png"
            alt="logo"
          />
        </div>
        <div style={{ color: "white", alignSelf: "center" }}>
          <i class="fa-solid fa-bars fa-2xl"></i>
        </div>
      </nav>
    );
  }

  return (
    <nav>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
    </nav>
  );
}
