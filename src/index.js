import Stylesheet from "./style.css";
import Icon from "./logos/logo.svg";
import Burrito from "./entrees/burrito.png";
import BurritoBowl from "./entrees/bowl.jpg";
import Lifestyle from "./entrees/lifestyle.png";
import Quesadilla from "./entrees/quesadilla.png";
import Salad from "./entrees/salad.jpg";
import Tacos from "./entrees/tacos.jpg";
import Sides from "./entrees/chips-quac.jpg";
import Kids from "./entrees/kidsmeal.jpg";

import ChipsAndGuac from "./entrees/chips-quac.jpg";


function stylesheet() {
    const stylesheetLink = document.createElement("link");
    stylesheetLink.rel = "stylesheet";
    stylesheetLink.href = Stylesheet;
    return stylesheetLink;
}

function navBar() {
    const nav = document.createElement("nav");

    const myIcon = new Image();
    myIcon.src = Icon;
    nav.appendChild(myIcon);

    const navList = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
        const listItem = document.createElement("li");
        if (i === 0) {
            const homeLink = document.createElement("a");
            homeLink.href = "#";
            homeLink.innerHTML = "Home";
            listItem.appendChild(homeLink);
        } else if (i === 1) {
            const aboutLink = document.createElement("a");
            aboutLink.href = "#";
            aboutLink.innerHTML = "About";
            listItem.appendChild(aboutLink);
        } else if (i === 2) {
            const contactLink = document.createElement("a");
            contactLink.href = "#";
            contactLink.innerHTML = "Contact";
            listItem.appendChild(contactLink);
        }
        navList.appendChild(listItem);
    }
    nav.appendChild(navList);
    
    return nav;
}

function menu() {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    const entreeText = ["BURRITO", "BURRITO BOWL", "LIFESTYLE", "QUESADILLA", "SALAD", "TACOS", "SIDES & DRINKS", "KID'S MEAL"];
    const entreeImages = [Burrito, BurritoBowl, Lifestyle, Quesadilla, Salad, Tacos, Sides, Kids];

    for (let i = 0; i < entreeImages.length; i++) {
        const item = document.createElement("div");
        item.className = "entree";
        const image = document.createElement("img");
        image.src = entreeImages[i];
        image.className = "entree-image";
        const text = document.createElement("div");
        text.innerHTML = entreeText[i];
        text.className = "entree-text";
        item.appendChild(image);
        item.appendChild(text);
        menuContainer.appendChild(item);
    }

    return menuContainer;
}

document.head.appendChild(stylesheet());
document.body.appendChild(navBar());
document.body.appendChild(menu());