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
import Facebook from "./logos/facebook.png"
import Insta from "./logos/insta.png"
import Twitter from "./logos/twitter.png"
import ChipsAndGuac from "./entrees/chips-quac.jpg";

const container = document.getElementById("content");

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
            const aboutLink = document.createElement("a");
            aboutLink.href = "#";
            aboutLink.innerHTML = "About";
            aboutLink.addEventListener("click", () => {
                switchTabs("About");
            });
            listItem.appendChild(aboutLink);
        } else if (i === 1) {
            const menuLink = document.createElement("a");
            menuLink.href = "#";
            menuLink.innerHTML = "Menu";
            listItem.appendChild(menuLink);
            menuLink.addEventListener("click", () => {
                switchTabs("Menu");
            });
        } else if (i === 2) {
            const contactLink = document.createElement("a");
            contactLink.href = "#";
            contactLink.innerHTML = "Contact";
            listItem.appendChild(contactLink);
            contactLink.addEventListener("click", () => {
                switchTabs("Contact");
            });
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

function about() {
    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-container";
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Chipotle was born of the radical belief that there is a connection between how food is raised and prepared, and how it tastes. " + "<b>" + "Real is better. Better for You, Better for People, Better for Our Planet. " + "</b>" + "It may be the hard way to do things, but it's the right way.";
    aboutContainer.appendChild(paragraph);
    return aboutContainer;
}

function contact() {
    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";
    const contactHeader = document.createElement("div");
    contactHeader.innerHTML = "CONNECT WITH US";
    contactContainer.appendChild(contactHeader);

    const socialsContainer = document.createElement("div");
    socialsContainer.className = "socials-container";
    contactContainer.appendChild(socialsContainer);

    const facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com/chipotle";
    const facebookIcon = document.createElement("img");
    facebookIcon.src = Facebook;
    facebookLink.appendChild(facebookIcon);
    socialsContainer.appendChild(facebookLink);

    const instLink = document.createElement("a");
    instLink.href = "https://www.instagram.com/chipotle/";
    const instaIcon = document.createElement("img");
    instaIcon.src = Insta;
    instLink.appendChild(instaIcon);
    socialsContainer.appendChild(instLink);

    const twitterLink = document.createElement("a");
    twitterLink.href = "https://twitter.com/chipotletweets";
    const twitterIcon = document.createElement("img");
    twitterIcon.src = Twitter;
    twitterLink.appendChild(twitterIcon);
    socialsContainer.appendChild(twitterLink);

    return contactContainer;
}

function switchTabs(to) {
    container.removeChild(container.children[1]);
    to === "About" ? container.appendChild(about()) : to === "Menu" ? container.appendChild(menu()) : container.appendChild(contact())
}

document.head.appendChild(stylesheet());
container.appendChild(navBar());
container.appendChild(menu());