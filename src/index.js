import loadPage from "./modules/pageload.js";
import './modules/style.css';
const content = document.createElement("div");
content.setAttribute("id","content");
const body = document.querySelector("body");
body.append(content);
console.log("Hello world!");
loadPage();


const about = document.getElementById("about");
about.classList.toggle("active");
const contact = document.getElementById("contact");
const menu = document.getElementById("menu");
contact.addEventListener("click", handle("contact"));
menu.addEventListener("click", handle("menu"));
about.addEventListener("click", handle("about"));
const arr = [about, menu, contact];

function clearActive(notTarget){
    arr.forEach((item) => {
        if(item !== notTarget && item.classList.contains("active")){
            item.classList.toggle("active")
        }
    })
}
/*
function handle(x){
    if(x === "about" && !about.classList.contains("active")){
            about.classList.toggle("active");
            clearActive(about);
    }else if(x === "contact" && !contact.classList.contains("active")){
            contact.classList.toggle("active");
            clearActive(contact);
    }else if(x === "menu" && !menu.classList.contains("active")){
            menu.classList.toggle("active");
            clearActive(menu);
    }
}*/
function handle(x){
    console.log(x);
}