function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phone = document.createElement("p");
  phone.textContent = "317 888 888";

  const address = document.createElement("p");
  address.textContent = "2222, Happiness Crescent, Indianapolis, USA";

  const location = document.createElement(img);
  location.src = "";
  location.alt = "location";

  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(location);

  return contact;
}

//load contact
function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
