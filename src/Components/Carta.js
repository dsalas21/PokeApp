import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import defaultImage from "../default.png";

const Carta = ({ name, brief, image }) => {
  return (
    <Card id="containerPokemon" style={{ width: "18rem" }}>
      <Card.Img src={image || defaultImage} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{brief}</Card.Text>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );
};

Carta.propTypes = {
  name: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Carta.defaultProps = {
  image: defaultImage,
};

export default Carta;
