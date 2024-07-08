import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";

export default function BookmakerSite() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const bookmakerParam = useParams().bookmaker;
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
  }, []);

  console.log(data);
  return (
    <div>
      <NavBar />
      <h1>{data.bookmaker}</h1>
    </div>
  );
}
