import React from "react";

//include images into your bundle
import Nav from "/src/js/component/nav.jsx"
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Nav/>
			<Jumbotron/>
			<div class="container text-center">
				<div class="row align-items-start">
					<div class="col">
					</div>
					<div class="col">
					cartaaaaa
					</div>
					<div class="col">
					One of three columns
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
