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

  useEffect(() => {
    actions.loadPerson(params.id).then((data) => setPerson(data));
  }, [params.id]);

  //passo1: criar UseState para armazenamento de person;
  //passo2: preencher o usestate com o resultado do loadPerson, substituindo o console.log
  //passo3: definir o meu html do componente com os dados do usestate

  return (
    <>
      <h1>{title}</h1>
      {person ? (
        <>
          <h2>{person.name}</h2>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
          ></img>
          <h3>Height:{person.height}</h3>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
