import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  if (isMobile) {
    return (
      <nav
        style={{
          backgroundColor: "#8B0000",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 1em",
          position: "sticky",
          top: "0",
          zIndex: "100",
        }}
      >
        <div
          style={{
            maxWidth: "200px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Link to="/">
            <img
              style={{ width: "100%", height: "auto", textAlign: "center" }}
              src="/logo2.png"
              alt="logo"
            />
          </Link>
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
