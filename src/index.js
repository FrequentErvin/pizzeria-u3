import loadPage from "./modules/pageload.js";
import './modules/style.css';
import createFooter from "./modules/createFooter.js";
import createAbout from "./modules/createAbout.js";
import createMenu from "./modules/createMenu.js";
import createContact from "./modules/createContact.js";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

//import { Map } from './modules/map.js';

const content = document.createElement("div");
content.setAttribute("id","content");
const body = document.querySelector("body");
body.append(content);

loadPage();

const container = document.getElementById("container");
container.classList.add("container");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const menu = document.getElementById("menu");

about.classList.toggle("active");
container.append(createAbout());


console.log(createFooter());
content.append(createFooter());

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
            console.log(createAbout())
            container.replaceChildren(createAbout());
    }else if(x === "contact" && !contact.classList.contains("active")){
            contact.classList.toggle("active");
            clearActive(contact);
            console.log(createContact())
            container.replaceChildren(createContact());
    }else if(x === "menu" && !menu.classList.contains("active")){
            menu.classList.toggle("active");
            clearActive(menu);
            console.log(createMenu())
            container.replaceChildren(createMenu());
    }
}

//Footer github link:

document.getElementById("gitLink").addEventListener("click", () =>{
    window.open("https://github.com/FrequentErvin","_blank").focus();
})

/*
document.addEventListener("DOMContentLoaded", function() {
    let mapElement = document.getElementById('map');
    
    Map.loadGoogleMapsApi().then(function(googleMaps) {
      Map.createMap(googleMaps, mapElement);
    });
  });*/