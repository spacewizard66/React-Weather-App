import React from "react";
import { useState, useEffect } from "react";
//import axios from "axios";
/*
function Movie() {
	const [data, setData] = useState({});
    const [location, setLocation] = useState('')

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(async (position) => {
                console.log("Latitude is :", position.coords.latitude);
                console.log("longitude is :", position.coords.longitude);
    
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;

                const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ca148f5dc67f12aafaa56d1878bb6db2`;
                // const url = "https://api.openweathermap.org/data/2.5/weather?q=plovdiv&units=metric&appid=ca148f5dc67f12aafaa56d1878bb6db2";

                const response = await fetch(url);
                const resJson = await response.json();
                console.log(resJson.main);

                /* axios.request(url).then((response) => {
                    setData(response.data)
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
            })
        }
    }, []); 



   

	//console.log(data);
	console.log("HEELLOOO TESTING");

	return (
		<div>

		</div>
	);
}
*/
export default Movie;








