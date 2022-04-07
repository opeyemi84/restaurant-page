import _ from "lodash";

function component() {
  const element = document.getElementById("content");
  element.textContent = "Welcome";
  return element;
}

document.body.appendChild(component());
