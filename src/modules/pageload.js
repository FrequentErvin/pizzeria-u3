const createNav = function(){
    const navbar = document.createElement("nav")
    navbar.classList.add("navbar");

    const name = document.createElement("h1")
    name.textContent = "PIZZERIA U3";

    const options = document.createElement("div");
    options.classList.add("options");


    const about = document.createElement("div");
    about.textContent = "About";
    about.setAttribute("id", "about");
    console.log(about);

    const contact = document.createElement("div");
    contact.textContent = "Contact";
    contact.setAttribute("id","contact");

    const menu = document.createElement("div");
    menu.textContent = "Menu";
    menu.setAttribute("id", "menu");

    navbar.append(name);
    options.append(about);
    options.append(menu);
    options.append(contact);
    navbar.append(options);
    return navbar;
}

function loadPage(){
    const content = document.getElementById("content");
    const container = document.createElement("div");
    container.setAttribute("id","container");
    content.append(createNav());
    content.append(container);
}
export default loadPage;