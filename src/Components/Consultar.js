import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Carta from "./Carta";

const Consultar = ({ pokemons }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await Promise.all(
        pokemons.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        })
      );
      setPokemonData(data);
    };

    fetchPokemonData();
  }, [pokemons]);

  return (
    <div className="productos-container">
      {pokemonData.map((pokemon) => (
        <Carta
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          brief={`Height: ${pokemon.height} | Weight: ${pokemon.weight}`}
        />
      ))}
    </div>
  );
};

Consultar.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Consultar;
