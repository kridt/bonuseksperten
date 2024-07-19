import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import "./BookmakerDetails.css"; // Importer CSS fil for ekstra styling

const BookmakerDetails = () => {
  const { bookmaker: bookmakerParam } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/bookmakers.json")
      .then((response) => response.json())
      .then((json) => {
        const bookmaker = json.find(
          (item) => item.bookmaker === bookmakerParam
        );
        setData(bookmaker);
      });
  }, [bookmakerParam]);

  if (!data.bookmaker) {
    return (
      <div className="container">
        <NavBar />
        <div className="not-found">Bookmaker not found</div>
      </div>
    );
  }

  const imagePath = `/img/${data.bookmaker.replaceAll(".", " ")}.png`;

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="content">
          {data.image_path && (
            <img
              src={imagePath}
              alt={data.bookmaker}
              className="bookmaker-image"
            />
          )}
          <h2 className="bookmaker-name">{data.bookmaker}</h2>
          <p className="bookmaker-bonus">
            <strong>Bonus:</strong> {data.bonus}
          </p>
          <p className="bookmaker-review">
            {data.bookmaker} er en af de mest populære betting sider på
            markedet. Siden tilbyder en bred vifte af sportsgrene og events, som
            du kan placere dine væddemål på. Med konkurrencedygtige odds og en
            brugervenlig grænseflade er {data.bookmaker} et fremragende valg for
            både nybegyndere og erfarne spillere. Kundeservicen er tilgængelig
            24/7 og kan hjælpe med enhver forespørgsel. Tilmeld dig i dag og
            oplev de mange fordele ved at spille hos {data.bookmaker}.
          </p>
          <div className="rating">
            {"★".repeat(data.rating)}
            {"☆".repeat(5 - data.rating)}
          </div>
          <p className="bookmaker-terms">
            <strong>Vilkår:</strong> {data.terms}
          </p>
          <a href={data.affiliate_link} className="affiliate-link">
            Spil på {data.bookmaker} her
          </a>
        </div>
      </div>
    </>
  );
};

export default BookmakerDetails;
