import App from "./App";
import "./styles";
import render from "./render";

render(App, { count: 0 }, document.body.querySelector("#app"));
