import React from "react";

export default function NormalBookie({ data }) {
  console.log(data);
  return (
    <div
      style={{
        maxWidth: "250px",
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.75)",
        borderRadius: "15px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          maxWidth: "250px",
        }}
      >
        <img
          src={"/img/" + data?.bookmaker?.replaceAll(".", " ") + ".png"}
          alt={data?.bookmaker}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "15px 15px 0 0",
          }}
        />
      </div>

      <div>
        <h2 style={{ textAlign: "center", lineHeight: ".2" }}>
          {data?.bookmaker}
        </h2>
        <p style={{ maxWidth: "250px", textAlign: "center", padding: "0 1em" }}>
          <strong>{data?.bonus}</strong>
        </p>

        <a
          style={{
            backgroundColor: "#008800",
            borderRadius: "5px",
            color: "white",
            padding: "1em",
            textAlign: "center",
            textDecoration: "none",
            margin: "1em",
            display: "block",
          }}
          href={data.affiliate_link}
        >
          Få bonus
        </a>
      </div>

      <div
        style={{
          backgroundColor: "#000",
          padding: "1em",
          color: "white",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            padding: "0 1em",
            fontSize: "10px",
          }}
        >
          {data.terms}
          selvudelukkelse via{" "}
          <a
            style={{ color: "white" }}
            href="https://rofus.nu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rofus
          </a>
        </p>
      </div>
    </div>
  );
}
