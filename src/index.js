import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import ReactLogoScreen from "./examples/react-logo-screen/react-logo-screen";

const EntryPoint = () => (
	<React.StrictMode>
		<ReactLogoScreen />
	</React.StrictMode>
);

ReactDOM.render(<EntryPoint />,document.getElementById("root"));
