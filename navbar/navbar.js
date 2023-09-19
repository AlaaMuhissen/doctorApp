const navbar = document.createElement("NAV");
navbar.setAttribute("id" , "nav");
const header = document.querySelector("HEADER");
header.appendChild(navbar);

const links = ["homepage", "chat" , "appointment" , "myDoctors" , "myProfile"];
const icons = ["fas fa-house-user", "fas fa-comment-dots","far fa-calendar-check","fas fa-heart", "fas fa-user"];

links.forEach((link, index) => {
    const linkElement=document.createElement("a");
    const icon = document.createElement("i");
    icon.setAttribute("class", icons[index]);
    linkElement.appendChild(icon);
    navbar.appendChild(linkElement);
});


