import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Anmeldelser.css"; // Importer CSS fil for styling

export default function Anmeldelser() {
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
    <>
      <NavBar />
      <div className="container">
        <div className="header">
          <h1>Her er alle vores anmeldelser af de forskellige bookmakere.</h1>
          <p>
            Vi har anmeldt alle bookmakere og givet dem en karakter fra 1-5
            stjerner
          </p>
          <hr className="hr" />
        </div>
        <div className="gridContainer">
          {data.map((item, index) => {
            return (
              <div className="card" key={item?.bookmaker}>
                <Link to={"/bookmaker/" + item?.bookmaker} className="link">
                  <div className="imageContainer">
                    <img
                      className="image"
                      src={
                        "/img/" + item?.bookmaker?.replaceAll(".", " ") + ".png"
                      }
                      alt={item?.bookmaker}
                    />
                  </div>
                  <div className="cardContent">
                    <h2 className="bookmakerName">{item?.bookmaker}</h2>
                    <div
                      className="rating-container"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="rating">
                        {Array.from({ length: item?.rating }, (_, i) => (
                          <span key={i} className={`star star-${i + 1}`}>
                            ★
                          </span>
                        ))}
                        {Array.from({ length: 5 - item?.rating }, (_, i) => (
                          <span key={i + item?.rating} className="star-empty">
                            ☆
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="bonus">{item?.bonus}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
