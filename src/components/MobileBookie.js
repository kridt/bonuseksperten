import React from "react";

export default function MobileBookie({ data }) {
  console.log(data);

  return (
    <div
      style={{
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.75)",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="card">
        <div>
          <img
            src={"/" + data?.bookmaker + ".png"}
            alt={data?.bookmaker}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>{data?.bookmaker}</h2>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
              padding: "0 1em",
            }}
          >
            {data?.bonus}
          </p>
        </div>
        <div style={{ width: "100%", margin: "0 auto" }}>
          <a
            href={data?.affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "green",
              borderRadius: "5px",
              color: "white",
              padding: "1em",
              textAlign: "center",
              textDecoration: "none",
              margin: "1em",
              display: "block",
            }}
          >
            Få din bonus
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          padding: "1em",
          height: "70px",
        }}
      >
        <p style={{ color: "white", fontSize: "10px" }}>
          {data?.terms} selvudelukkelse via{" "}
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
