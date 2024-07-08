import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Andmeldelser() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/bookmakers.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (isMobile) {
    return (
      <div>
        <NavBar />
        <h1>Anmeldelser</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar />

      <div
        style={{
          maxWidth: "80%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1>Her er alle vores anmeldelser af de forskellige bookmakere.</h1>
        <p>
          Vi har anmeldt alle bookmakere og givet dem en karakter fra 1-5
          stjerner
        </p>
        <hr />
        <div
          style={{
            display: "grid",
            width: "80%",
            gridTemplateColumns: "repeat(4, minmax(250px, 1fr))",
            gap: "1.5em",
            margin: "5em auto",
          }}
        >
          {data.map((item) => {
            console.log(item);
            return (
              <div
                style={{
                  textAlign: "center",
                }}
                key={item?.bookmaker}
              >
                <Link to={"/bookmaker/" + item?.bookmaker}>
                  <div
                    style={{
                      maxWidth: "350px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      width={"100%"}
                      src={
                        "/img/" + item?.bookmaker?.replaceAll(".", " ") + ".png"
                      }
                      alt={item?.bookmaker}
                    />
                  </div>
                  <p>{item?.rating}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
