import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { setServers } from "dns";

const NewH1 = styled.h1`
  background-color: yellow;
  border: 2px solid black;
  border-radius: 30%;
  color: blue;
  width: 60%;
  margin: auto;
`;

function WelcomePage() {
  return (
    <Router>
      <section className="welcome-page">
        <header>
          <NewH1>Welcome to the ultimate fan site!</NewH1>
          <ul>
            <li>
              <Link color="danger" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/characterList">Character List</Link>
            </li>
          </ul>
          <Route exact path="/characterList">
            <CharacterList />
          </Route>
        </header>
      </section>
    </Router>
  );
}
export default WelcomePage;
