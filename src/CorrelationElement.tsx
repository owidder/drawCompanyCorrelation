// @ts-ignore
import * as React from "react";
import * as ReactDOM from "react-dom";

import {Correlation} from "./Correlation";

class CorrelationElement extends HTMLElement {

    public onChangeCompany: (string) => void;

    connectedCallback() {
        ReactDOM.render(<Correlation
            symbolX={this.getAttribute("symbolX")}
            symbolY={this.getAttribute("symbolY")}/>, this);
    }
}

customElements.define("company-correlation", CorrelationElement);
