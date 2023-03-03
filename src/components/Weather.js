import React from "react";
import { useState, useEffect } from "react";

function Weather() {
	// "useState()" React hook to setup important variables
	const [unit, setUnit] = useState(true);
	const [data, setData] = useState(null);

	const [location, setLocation] = useState("");
	const [error, setError] = useState();

	const [animate, setAnimate] = useState(false);
	const [animate2, setAnimate2] = useState(false);

	// Uses the "useEffect()" React hook to initialize
	// the "unit" variable to be Fahrenheit (true)
	useEffect(() => {
		setAnimate(true);
	}, [data, error]);

	const url = `//api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`;

	// Function to Fetch API data when a search input is Entered
	const fetchAPI = async (event) => {
		// Checks if the "Event" was the "Enter" key, then runs
		if (event.key === "Enter") {
			try {
				const response = await fetch(url);
				const results = await response.json();
				// Sets the Data variable to the APIs response in JSON format
				setData(results);
			} catch (err) {
				setError(err);
			}
		}
	};

	// Function to FLIP temperature "unit" to its opposite
	const flip = (unit) => {
		unit ? setUnit(!unit) : setUnit(true);
		return unit;
	};

	// Equation to Calculate Fahrenheit
	const fahrenheit = (c) => {
		const f = c * 1.8 + 32;
		return Math.floor(f, 10);
	};

	// Selects the Correct Unit to be shown based on the "unit" variable
	const select = (temp) => {
		return unit ? fahrenheit(temp) : Math.floor(temp, 10);
	};

	return (
		<div className="container">
			<div className="search">
				<input
					className="search-bar"
					onChange={(event) => setLocation(event.target.value)}
					onKeyPress={fetchAPI}
					placeholder="Enter a Location"
					type="text"
					autoFocus
				/>
				{data ? (
					data.main ? (
						<button
							className="unit-button"
							id={animate2 ? "animated-spin" : ""}
							type="button"
							onClick={() => {flip(unit); setAnimate2(true);}}
							onAnimationEnd={() => setAnimate2(false)}
						>
							{unit ? "°C" : "°F"}
						</button>
					) : null
				) : null}
			</div>

			{data ? (
				data.main ? (
					<div className="main">
						<div
							className="location-div"
							id={animate ? "animate1" : ""}
						>
							<p className="location">{`${data.name}, ${data.sys.country}`}</p>
						</div>

						<div
							className="temp-div"
							id={animate ? "animate2" : ""}
						>
							<h1 className="temp">{`${select(data.main.temp)}°${unit ? "F" : "C"}`}</h1>
						</div>

						<div
							className="description"
							id={animate ? "animate3" : ""}
						>
							<p className="description">{`${data.weather[0].description}`}</p>
						</div>

						<div className="bottom">
							<div
								className="extra"
								id={animate ? "animate4" : ""}
								onAnimationEnd={() => setAnimate(false)}
							>
								<div className="feels-like">
									<p>{`${select(data.main.feels_like)}°${unit ? "F" : "C"}`}</p>
									<p>Feels Like</p>
								</div>
								<div className="humidity">
									<p>{data.main.humidity}%</p>
									<p>Humidity</p>
								</div>
								<div className="wind-speed">
									<p>{Math.floor(data.wind.speed)} MPH</p>
									<p>Wind Speed</p>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="main">
						<div
							className="location-div"
							id={animate ? "animate1" : ""}
							onAnimationEnd={() => setAnimate(false)}
						>
							<p className="location">
								{"Sorry, city not found   :("}
							</p>
						</div>
					</div>
				)
			) : !error ? (
				<div
					className="location-div"
					id={animate ? "animate1" : ""}
					onAnimationEnd={() => setAnimate(false)}
				>
					<h1 className="location">Weather Forecast</h1>
				</div>
			) : (
				<div
					id={animate ? "animate1" : ""}
					onAnimationEnd={() => setAnimate(false)}
				>
					<h1>Uh oh, there seems to have been a problem :/</h1>
				</div>
			)}
		</div>
	);
}
export default Weather;