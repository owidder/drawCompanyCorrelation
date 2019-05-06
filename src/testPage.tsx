import * as React from "react";
import * as ReactDOM from "react-dom";

import {Correlation} from "./Correlation";

ReactDOM.render(<Correlation symbolX="AAPL" symbolY="FB"/>, document.getElementById("correlation"));
