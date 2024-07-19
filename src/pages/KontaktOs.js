import React from "react";
import NavBar from "../components/NavBar";
import "./KontaktOs.css"; // Importer CSS fil for styling

export default function KontaktOs() {
  return (
    <>
      <NavBar />
      <div className="kontakt-container">
        <div className="kontakt-header">
          <h1>Kontakt Os</h1>
          <p>Vi ser frem til at høre fra dig!</p>
        </div>
        <form className="kontakt-form">
          <div className="form-group">
            <label htmlFor="name">Navn</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Dit navn"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Din email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Besked</label>
            <textarea
              id="message"
              name="message"
              placeholder="Din besked"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Besked
          </button>
        </form>
      </div>
    </>
  );
}
