import _ from "lodash";
import loadMenu from "./menu";

function component() {
  const element = document.getElementById("content");
  element.textContent = "Welcome";
  return element;
}

document.body.appendChild(component());
