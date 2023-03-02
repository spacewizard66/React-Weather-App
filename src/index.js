import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./components/Weather";
import "./index.css";
/* import reportWebVitals from "./reportWebVitals"; */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
	<div>
		<Weather />
	</div>
	</React.StrictMode>
);