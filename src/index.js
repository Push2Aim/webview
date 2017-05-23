import React from "react";
import ReactDOM from "react-dom";
import WebViewer from "./WebViewer";
import "./index.css";

ReactDOM.render(
    <WebViewer duration={getValue("duration")} location={getValue("location")}
               token={getValue("token")} url={getValue("url")}/>,
  document.getElementById('root')
);

function getValue(key) {
    let url = document.URL;
    let data = url.slice(url.lastIndexOf("?") + 1).split("&");
    for (let i = 0; i < data.length; i++) {
        let values = data[i].split("=");
        if (values[0] === key) return values[1];
    }
}