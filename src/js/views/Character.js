import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const Character = () => {
    
    const params = useParams();

    const title = "Characters"

    const { actions } = useContext(Context);

    useEffect(() => {
        actions.loadPerson(params.id).then(data => console.log(data))
    }, [params.id]);

    return <h1>{title}-{params.id}</h1>
    
    //passo1: criar UseState para armazenamento de person;
    //passo2: preencher o usestate com o resultado do loadPerson, substituindo o console.log
    //passo3: definir o meu html do componente com os dados do usestate
};