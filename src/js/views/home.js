import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import favoriteToggle from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardPeople from "../component/CardPeople";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites.some(
    (fav) => fav.type === "person" && fav.uid === person.uid
  );
  const [checked, setChecked] = useState(isFavorite);

  const handleAdd = (type, uid, name) => {
    actions.addFav(type, uid, name);
  };

  return (
    <>
      <div className="text-danger">
        <h1>Characters</h1>
      </div>
      <div className="card-group card-group-scroll">
        {store.people?.map((person) => {
          const favoriteToggle = () => {
            if (!checked) {
              actions.addFavPerson(person.uid, person.name);
              actions.addFavVehicle(vehicles.uid, vehicles.name);
            } else {
              actions.removeFavPerson(person.uid);
              actions.removeFavVehicle(vehicles.uid);
            }
            setChecked(!checked);
          };

          return (
            <>
              <CardPeople person={person} handleAdd={handleAdd} />
            </>
          );
        })}
      </div>
      <p></p>
      <p></p>
      <div className="text-danger">
        <h1>Planets</h1>
      </div>
      <div className="card-group card-group-scroll">
        {store.vehicles?.map((vehicles) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top holder.js/100px180"
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                />
                <Card.Body>
                  <Card.Title>{vehicles.name}</Card.Title>
                  <Card.Text>{vehicles.uid}</Card.Text>
                  <Link to={`vehicle/${vehicles.uid}`}>
                    <button
                      type="button"
                      class="btn btn-outline-info"
                      onClick={() => actions.loadVehicle(vehicles.uid)}
                    >
                      Learn More!
                    </button>
                  </Link>

                  <ToggleButton
                    className="mb-2 mx-2 float-end"
                    width="16"
                    height=""
                    id={`toggle-check-vehicle-${vehicles.uid}`}
                    type="checkbox"
                    variant="outline-warning"
                    checked={checked}
                    value="1"
                    onChange={() =>
                      handleAdd("vehicles", vehicles.uid, vehicles.name)
                    }
                  >
                    <FontAwesomeIcon icon="fa fa-heart" />
                  </ToggleButton>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};
