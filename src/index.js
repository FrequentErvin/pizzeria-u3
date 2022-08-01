import loadPage from "./modules/pageload.js";
import './modules/style.css';
import createAbout from "./modules/createAbout.js";
import createMenu from "./modules/createMenu.js";
import createContact from "./modules/createContact.js";

const content = document.createElement("div");
content.setAttribute("id","content");
const body = document.querySelector("body");
body.append(content);

loadPage();

const container = document.querySelector("container");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const menu = document.getElementById("menu");

about.classList.toggle("active");
content.append(createAbout());

contact.addEventListener("click", () => {
    handle("contact")
});
menu.addEventListener("click", () => {
    handle("menu")
});
about.addEventListener("click", () => {
    handle("about")
});
const arr = [about, menu, contact];

function clearActive(notTarget){
    arr.forEach((item) => {
        if(item !== notTarget && item.classList.contains("active")){
            item.classList.toggle("active")
        }
    })
}
function handle(x){
    if(x === "about" && !about.classList.contains("active")){
            about.classList.toggle("active");
            clearActive(about);
            content.replaceChildren();
    }else if(x === "contact" && !contact.classList.contains("active")){
            contact.classList.toggle("active");
            clearActive(contact);
            container.replaceChildren(createContact());
    }else if(x === "menu" && !menu.classList.contains("active")){
            menu.classList.toggle("active");
            clearActive(menu);
            container.replaceChildren(createMenu());
    }
}
