import loadPage from "./modules/pageload.js";
console.log("Hello world!");
loadPage();

const options = document.querySelector("options");

const about = document.getElementById("about");
about.classList.toggle("active");
const contact = document.getElementById("contact");
const menu = document.getElementById("menu");
contact.addEventListener("click", handle);
menu.addEventListener("click", handle);
about.addEventListener("click", handle);

function handle(e){
    console.log(e);
}