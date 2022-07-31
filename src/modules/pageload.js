import createAbout from "./createAbout.js"
const createNav = function(){
    const navbar = document.createElement("nav")
    const name = document.createElement("h1")
    const options = document.createElement("div");
    const about = document.createElement("div");
    const contact = document.createElement("div");
    const menu = document.createElement("div");
    name.textContent = "PIZZERIA U3";
    name.setAttribute("id", "name");
    about.textContent = "About";
    about.setAttribute("id", "about");
    contact.textContent = "Contact";
    menu.textContent = "Menu";
    menu.setAttribute("id", "menu");
    options.classList.add("options");
    navbar.classList.add("navbar");
    navbar.append(name);
    options.append(about);
    options.append(contact);
    options.append(menu);
    navbar.append(options);
    return navbar;
}

function loadPage(){
    const content = document.getElementById("content")
    content.append(createNav())
    content.append(createAbout());
}
export default loadPage;