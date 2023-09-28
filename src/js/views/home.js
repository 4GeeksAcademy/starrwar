import React,{useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("home",store.people)
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

			return(
				<>
				<h1>{person.name}</h1>
				<p>{person.uid}</p>
				<button onClick= {() => actions.loadPerson(person.uid)}>For more...</button>
				</>
			)
		})}
	</div>)
};
