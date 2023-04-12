import React from "react";

//include images into your bundle
import Nav from "/src/js/component/nav.jsx"
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Nav/>
			<Jumbotron/>
			<div className="container text-center">
				<div className="row align-items-start">
					<div className="col col-3">
						<Card/>
					</div>
					<div className="col col-3">
						<Card/>
					</div>
					<div className="col col-3">
						<Card/>
					</div>
					<div className="col col-3">
						<Card/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
