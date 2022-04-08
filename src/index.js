import _ from "lodash";
import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";

//----------------------- Header function start ------------------
function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "RoyalHands";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}
//----------------------- Header section end ----------------------

//----------------------- Nav section start -----------------------

function createNav() {
  const nav = document.createElement("nav");
  //home button
  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  //menu button
  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  //contact button
  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

//--------------------- Nav section end --------------------------

// -------------------- Function to setActiveButton Start --------------

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

// -------------------- Function to setActiveButton End --------------
// document.body.appendChild(createNav());
//load page content

function loadPage() {
  const loadContent = document.getElementById("content");
  loadContent.appendChild(createHeader());
  loadContent.appendChild(createMain());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

loadPage();
