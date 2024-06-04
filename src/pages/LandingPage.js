import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useMediaQuery } from "react-responsive";
import MobileBookie from "../components/MobileBookie";
import Footer from "../components/Footer";
import NormalBookie from "../components/NormalBookie";

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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: ".5em",
            padding: "0 1em",
            margin: "5em auto",
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
        <div
          style={{
            margin: "0 1em",
          }}
        >
          <div>
            <h2>Hvad er en casino bonus?</h2>
            <p>
              En casino bonus er i mange tilfælde en slags velkomstgave, når du
              tilmelder dig på et nyt casino. Næsten alle casinoer har en
              velkomstbonus, når du opretter dig på deres casino og de har i
              mange tilfælde også flere velkomsttilbud. En casino bonus er en
              god måde, hvorpå du kan få lidt mere ud af din første indbetaling.
              Hvis du udnytter alle casino bonusserne, kan der være mange penge,
              at hente på dine indbetalinger, eller du kan endda få nogle tilbud
              der er 100% gratis. Du skal også gøre dig nogle tanker om, hvilken
              bonus der passer dig bedst, da der er stor forskel på hvor meget
              du får ud af den enkelte bonus. Hvis du har dig at indbetale et
              større beløb ville det f.eks. være en fordel, at vælge et casino,
              hvor du får en stor indbetalingsbonus.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />

      <div
        style={{
          textAlign: "center",
          padding: "0 20%",
        }}
      >
        <h1>Her er en liste med de bedste online casino bonusser i Danmark</h1>

        <p>
          Vi har gjort det let for dig at finde de bedste casino bonusser i
          landet fra de førende danske online casinoer. Her kan du finde masser
          af free spins, indbetalingsbonusser og meget mere. Vi opdaterer
          løbende vores liste, så du altid kan være sikker på at få de bedste
          tilbud. Vi hjælper dig med at vælge det online casino, der passer
          bedst til dig.
        </p>
      </div>
      <hr />
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5em",
          rowGap: "4em",
          padding: "0 5em",
          width: "80%",
          margin: "5em auto",
        }}
      >
        {data.map((bookmaker) => {
          return <NormalBookie key={bookmaker.bookmaker} data={bookmaker} />;
        })}
      </div>

      <Footer />
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
