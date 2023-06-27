import Stylesheet from "./style.css";
import Icon from "./logos/logo.svg";

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

document.head.appendChild(stylesheet());
document.body.appendChild(navBar());
