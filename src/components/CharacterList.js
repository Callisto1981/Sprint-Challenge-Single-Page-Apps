import React, { useEffect, useState } from "react";
import WelcomePage from "./WelcomePage";
import CharacterCard from "./CharacterCard";
import axios from "axios";

function CharacterList(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(response.data.results);
        setData(characters);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <form className="search">
        <input type="text" onChange={handleInputChange} value={query} />
      </form>
      {data.map((data, index) => (
        <CharacterCard
          key={index}
          image={data.image}
          name={data.name}
          species={data.species}
        />
      ))}
    </section>
  );
}

export default CharacterList;
