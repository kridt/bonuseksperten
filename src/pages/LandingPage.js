import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "react-responsive";
import MobileBookie from "../components/MobileBookie";

export default function LandingPage() {
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    fetch("/bookmakers.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (isMobile) {
    return (
      <div>
        <NavBar />
        <h1>Mobile Landing Page</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: ".5em",
            padding: "0 1em",
          }}
        >
          {data.map((item) => {
            return (
              <div style={{ marginBottom: "2em" }} key={item.bookmaker}>
                <MobileBookie data={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>Landing Page</h1>

      <div>
        {data.map((bookmaker) => (
          <div key={bookmaker.bookmaker}>
            <h2>{bookmaker.bonus}</h2>
          </div>
        ))}
      </div>

      {/* <div>
        <div
          style={{
            width: "100%",
            margin: "0 auto",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              overflow: "hidden",
            }}
            src="/bagground.webp"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
}
