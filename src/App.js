import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap/";
import Finder from "./Components/Finder";
import Carta from "./Components/Carta";

import Titulo from "./Components/Titulo";
import Consultar from "./Components/Consultar";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState(null);

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => console.error("Error fetching pokemon data:", error));
  }, []);

  return (
    <div className="App">
      <Container>
        <Titulo />
        <Finder texto={"Buscar "} foundPokemon={setPokemon} />
        {pokemon && (
          <Carta
            name={`pokemon > ${pokemon.name}`}
            image={pokemon.sprites.front_default}
          />
        )}
        <Consultar pokemons={pokemonList} />
      </Container>
    </div>
  );
};

export default App;
