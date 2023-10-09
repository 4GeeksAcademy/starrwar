import React,{useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';


export const Home= (props) => {
	const { store, actions } = useContext(Context);
    const isFavorite = store.favorites.some(fav => fav.type === 'person' && fav.uid === person.uid);
    const [checked, setChecked] = useState(isFavorite);
	
 [store.favorites];

	return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		{store.people?.map((person)=>{

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

			return(
				
				<>
				
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top holder.js/100px180" src= {`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} />
				<Card.Body>
				<Card.Title>{person.name}</Card.Title>
				<Card.Text>
		  			{person.uid}
          			{person.gender}
          			{person.hair_color}
          			{person.eye_color}
        		</Card.Text>
					<Link to="/demo">
						<button onClick= {() => actions.loadPerson(person.uid)}>Learn More</button>
					</Link>

					<ToggleButton
                    className="mb-2 mx-2 float-end"
                    width="16"
                    height=""
                    id={`toggle-check-character-${person.uid}`}
                    type="checkbox"
                    variant="outline-warning"
					checked={checked}
                    value="1"
                    onChange={favoriteToggle}
                >
                </ToggleButton>
				</Card.Body>
				</Card>
				
				</>
			)
		})}
		

        {store.vehicles?.map((vehicles)=>{

        return(

			
	     <>

<Card style={{ width: '18rem' }}>
		<Card.Img variant="top holder.js/100px180" src= {`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} />
				<Card.Body>
				<Card.Title>{vehicles.name}</Card.Title>
				<Card.Text>
		  			{vehicles.uid}
          			{vehicles.model}
          			{vehicles.vehicle_class}
          			{vehicles.manufacturer}
        		</Card.Text>
					<Link to="/demo">
					<button onClick= {() => actions.loadVehicle(vehicles.properties)}>Learn More</button>
					</Link>

					<ToggleButton
                    className="mb-2 mx-2 float-end"
                    width="16"
                    height=""
                    id={`toggle-check-character-${vehicles.uid}`}
                    type="checkbox"
                    variant="outline-warning"
					checked={checked}
                    value="1"
                    onChange={favoriteToggle}
                    
                >
                </ToggleButton>
				</Card.Body>
				</Card>
	
	    
	    </>
)
})}

		{store.planets?.map((planets)=>{

		return(
		 <>
		<h1>{planets.name}</h1>



		</>
)
})}
	</div>)
};
