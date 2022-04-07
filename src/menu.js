function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem("Amala", "Yam Flour, Ewedu, Meat, Fish"));
  menu.appendChild(
    createMenuItem("Rice", "Basmati Rice, Stew, Fish, Goat Meat")
  );
  menu.appendChild(
    createMenuItem("Fufu", "Cassava, Melon soup, Beef, Smoked fish")
  );
  menu.appendChild(
    createMenuItem("Iyan", "Pounded yam, efo-riro, Crabs, Shrimps")
  );
  menu.appendChild(createMenuItem("Semo", "Semolina Flour, Vegetables"));

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/${name.toLowerCase()}.jpg`;
  foodImage.alt = `{name}`;
}
