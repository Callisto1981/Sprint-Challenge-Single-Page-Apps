import React, { useEffect, useState } from "react";
import WelcomePage from "./WelcomePage";
import CharacterCard from "./CharacterCard";
import axios from "axios";

function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <section className="character-list">
      <h2>
        {data.map((p, index) => (
          <CharacterCard key={index} name={p.name} />
        ))}
      </h2>
    </section>
  );
}

export default CharacterList;
