const createMenu = function () {
    const content = document.getElementById("content");
    const headerBox = document.createElement("div");
    headerBox.classList.add("centered");
    const header = document.createElement("h1");
    header.textContent = "MENU";
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-grid");

    const item1 = document.createElement("div");
    const image1 = document.createElement("img");
    const caption1 = document.createElement("caption");
    caption1.textContent = "Margharita 3$";
    item1.append(image1, caption1);
    item1.classList.add("card");

    /*const item2 = document.createElement("div");
    const item3 = document.createElement("div");
    const item4 = document.createElement("div");
    const item5 = document.createElement("div");
    const item6 = document.createElement("div");*/


    content.append(header)
}