import capriccosa from "../assets/capricciosa.png"
import margherita from "../assets/margherita.png"
import mexican from "../assets/mexican.png"
import pepperoni from "../assets/pepperoni.png"
import sicilian from "../assets/sicilian.png"
import veggie from "../assets/veggie.png"

const createMenu = function () {
    const menu = document.createElement("div");
    menu.classList.add("menu")
    const headerBox = document.createElement("div");
    headerBox.classList.add("centered");
    const header = document.createElement("h1");
    header.textContent = "MENU";
    headerBox.append(header);

    //Add grid functionality to menu items via class:
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-grid");

    //MENU ITEMS LIST (6):

    const item1 = document.createElement("div");
    const image1 = document.createElement("img");
    image1.src = capriccosa;
    image1.classList.add("pizza-image");
    const caption1 = document.createElement("caption");
    caption1.textContent = "Capricossa 3$";
    item1.append(image1, caption1);
    item1.classList.add("card");
    
    const item2 = document.createElement("div");
    const image2 = document.createElement("img");
    image2.src = margherita
    image2.classList.add("pizza-image");
    const caption2 = document.createElement("caption");
    caption2.textContent = "Margherita 3$";
    item2.append(image2, caption2);
    item2.classList.add("card");

    const item3 = document.createElement("div");
    const image3 = document.createElement("img");
    image3.src = mexican
    image3.classList.add("pizza-image");
    const caption3 = document.createElement("caption");
    caption3.textContent = "Mexican 3$";
    item3.append(image3, caption3);
    item3.classList.add("card");

    const item4 = document.createElement("div");
    const image4 = document.createElement("img");
    image4.src = pepperoni
    image4.classList.add("pizza-image");
    const caption4 = document.createElement("caption");
    caption4.textContent = "Pepperoni 3$";
    item4.append(image4, caption4);
    item4.classList.add("card");

    const item5 = document.createElement("div");
    const image5 = document.createElement("img");
    image5.src = sicilian
    image5.classList.add("pizza-image");
    const caption5 = document.createElement("caption");
    caption5.textContent = "Sicilian 3$";
    item5.append(image5, caption5);
    item5.classList.add("card");

    const item6 = document.createElement("div");
    const image6 = document.createElement("img");
    image6.src = veggie
    image6.classList.add("pizza-image");
    const caption6 = document.createElement("caption");
    caption6.textContent = "Margharita 3$";
    item6.append(image6, caption6);
    item6.classList.add("card");

    menuItems.append(item1,item2,item3,item4,item5,item6)

    menu.append(headerBox, menuItems)
    return menu;
}
export default createMenu