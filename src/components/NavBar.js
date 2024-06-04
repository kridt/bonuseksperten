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
    <nav
      style={{
        backgroundColor: "#8B0000",
        display: "flex",
        justifyContent: "center",
        padding: "1em 8em",
        position: "sticky",
        top: "0",
        zIndex: "100",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: "1",
        }}
      >
        <Link to="/">
          <img width={"25%"} height={"auto"} src="/logo2.png" alt="logo" />
        </Link>
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          padding: "0",
          margin: "0",
          justifyContent: "space-between",
          flex: "1",
        }}
      >
        <li>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              padding: "1em",
            }}
            to="/"
          >
            Forside
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              padding: "1em",
            }}
            to="/"
          >
            Om os
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              padding: "1em",
            }}
            to="/"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
