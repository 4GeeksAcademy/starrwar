import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";
import { Vehicle } from './views/Vehicle';
import { Character } from './views/Character';

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<Container>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Row>
						<Col>
							<NavbarMenu />
						</Col>
					</Row>
					<Row>
						<Col>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character" component= {Character} />
						<Route path="/vehicle" component= {Vehicle} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
						</Col>
					</Row>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</Container>
	);
};

export default injectContext(Layout);
