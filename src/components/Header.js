import React from "react";
import styled from "styled-components";

const NewHone = styled.h1`
  color: yellow;
  background-color: blue;
  border-radius: 30%;
  margin: 5px auto;
  width: 60%;
  border: 3px solid black;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <NewHone className="ui center">Rick &amp; Morty Fan Page</NewHone>
    </header>
  );
}
