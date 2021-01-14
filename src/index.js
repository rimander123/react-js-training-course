import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import ReactIcon from "./ReactIcon";

const EntryPoint = () => (
	<React.StrictMode>
		<ReactIcon />
	</React.StrictMode>
);

ReactDOM.render(<EntryPoint />,document.getElementById("root"));
