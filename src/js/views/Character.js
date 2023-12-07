import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Character = () => {
  const params = useParams();

  const title = "Characters";

  const { store, actions } = useContext(Context);

  const [person, setPerson] = useState(null);

  const [character, setCharacter] = useState("")

  useEffect(() => {
    actions.loadPerson(params.id).then((data) => setPerson(data));
  }, [params.id]);

  useEffect(() => {
    actions.loadCharacter(params.id).then((data) => setCharacter(data));
  }, [params.id]);


  return (
    <>
      <h1>{title}</h1>
      {person ? (
        <>
          <h2>{person.name}</h2>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
          ></img>
          <h4>Height:{person.height}</h4>
          <h4>Gender:{person.gender}</h4>
          <h4>Mass:{person.mass}</h4>
          <h4>Birth Year:{person.birth_year}</h4>
          <h4>Hair Color:{person.hair_color}</h4>
          <h4>Eye Color:{person.eye_color}</h4>
         <h4>Description:{character.description}</h4>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
