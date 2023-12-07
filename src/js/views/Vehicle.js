import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Vehicle = () => {
  const params = useParams();

  const title = "Vehicle";

  const { store, actions } = useContext(Context);

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    actions.loadVehicle(params.id).then((data) => setVehicle(data));
  }, [params.id]);






  return (

  <>
      <h1>{title}</h1>
      {vehicle ? (
        <>
          <h2>{vehicle.name}</h2>
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
          ></img>
          <h4>Model:{vehicle.model}</h4>
          <h4>Vehicle Class:{vehicle.vehicle_class}</h4>
          <h4>Manufacturer:{vehicle.manufacturer}</h4>
          <h4>Crew:{vehicle.crew}</h4>
          <h4>Length:{vehicle.length}</h4>
          <h4>Consumables:{vehicle.consumables}</h4>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
