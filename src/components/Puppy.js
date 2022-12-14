import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Puppy() {
	const [data, setData] = useState({});
    
	const url = "https://dog.ceo/api/breeds/image/random";

	useEffect(() => {
		axios.get(url).then((response) => {
			setData(response.data);
			console.log(response.data);
		});
	}, []);

	console.log(data.message);
	console.log("HEELLOOO TESTING");

	return (
		<div>
			<img src={`${data.message}`} className="dog-picture" alt=""></img>
		</div>
	);
}

export default Puppy;
