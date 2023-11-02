const getState = ({ getStore, getActions, setStore }) => {

	return {

		store: {

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			person:[],
			vehicles:[],
			planets:[],
			favorites:[]
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavPerson: (uid, name) => {
				const store = getStore();
				const newFav = { "type":"character", "uid":uid, "name":name };
				const favorites = [...store.favorites, newFav];
				setStore({ favorites });
			},
			addFavVehicle: (uid, name) => {
				const store = getStore();
				const newFav = { "type":"vehicle", "uid":uid, "name":name };
				const favorites = [...store.favorites, newFav];
				setStore({ favorites });
			},
			removeFavPerson: (uid) => {
				const store = getStore();
				const filteredFavs = store.favorites.filter(fav => !(fav.type === "person" && fav.uid === uid));
				setStore({ favorites: filteredFavs });
			},
			removeFavVehicle: (uid) => {
				const store = getStore();
				const filteredFavs = store.favorites.filter(fav => !(fav.type === "vehicle" && fav.uid === uid));
				setStore({ favorites: filteredFavs });
			},
			loadPeople:() => {
				console.log("This is load people")
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				//.then(data => console.log(data.results))
				.then(data => setStore({people:data.results}))
				.catch(err => console.error(err))
			},
			
			loadPerson:(id) => {
				return fetch("https://www.swapi.tech/api/people/" + id)
				.then(res => res.json())
				.then(data => data.result.properties)
			},
			loadVehicles:() => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(res => res.json())
				.then(data => setStore({vehicles:data.results}))
				.catch(err => console.error(err))
			},
			loadVehicle:(id) => {
				console.log()
				fetch("https://www.swapi.tech/api/vehicles/" + id)
				.then(res => res.json())
				.then(data => console.log(data))
			},
			loadPlanets:() => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => setStore({planets:data.results}))
				.catch(err => console.error(err))
			},
		}
	};
};

export default getState;
