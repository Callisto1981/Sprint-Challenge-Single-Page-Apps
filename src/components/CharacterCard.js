import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import axios from "axios";

const NewDiv = styled.div`
  padding: 5%;
  text-align: center;
  border: 2px solid black;
  width: 50%;
  border-radius: 20%;
  background-color: yellow;
  color: blue;
  margin: 10px auto;
`;

const NewImage = styled.img`
  border-radius: 30%;
  border: 2px solid blue;
`;

function CharacterCard(props) {
  return (
    <NewDiv>
      <NewImage src={props.image} />
      <p>Name:{props.name} </p>
      <p>Species:{props.species}</p>
    </NewDiv>
  );
}

export default CharacterCard;
