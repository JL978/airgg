import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Footer from "./components/Footer";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
