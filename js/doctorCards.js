function createDoctorCard(name, type, status, rate) {
    // Create the main container for the card
    let allCards = document.createElement("section");
    allCards.setAttribute("class", "cards");

    // Create the card container
    let card = document.createElement("figcaption");
    card.setAttribute("class", "card");
    card.style.width = "60%";
    card.style.height = "20%";
    card.style.border = "1px solid rgb(179, 177, 177)";
    card.style.display = "flex";

    // Create the image container
    let imgSec = document.createElement("figure");
    imgSec.setAttribute("class", "doctorImg");
    imgSec.style.width = "60%";
    imgSec.style.height = "20%";

    // Create the image element
    let docImg = document.createElement("img");
    docImg.setAttribute("src", "https://leman-clinic.ch/wp-content/uploads/2018/11/02.jpg");
    docImg.setAttribute("alt", "docPic");
    docImg.style.width = "100%";
    docImg.style.height = "100%";

    // Create the description container
    let descriptionSec = document.createElement("section");
    descriptionSec.setAttribute("class", "description");
    descriptionSec.style.display = "block";

    // Create the doctor's name element
    let doctorName = document.createElement("h1");
    doctorName.setAttribute("class", "name");
    doctorName.textContent = name;

    // Create the doctor's type element
    let doctorType = document.createElement("h3");
    doctorType.setAttribute("class", "doctorType");
    doctorType.textContent = type;

    // Create the doctor's status button
    let docStatus = document.createElement("button");
    docStatus.setAttribute("class", "status");
    docStatus.textContent = status;
    docStatus.style.backgroundColor = "rgb(128, 187, 235)";
    docStatus.style.color = "white";
    docStatus.style.width = "20%";
    docStatus.style.height = "20%";

    // Create the star icon
    let starIcon = document.createElement("span");
    starIcon.setAttribute("class", "fa fa-star");
    starIcon.style.color = "orange";

    // Create the rating element
    let rating = document.createElement("span");
    rating.setAttribute("class", "rating");
    rating.textContent = rate;
    rating.style.fontSize = "10px";

    // Append elements to their respective containers
    imgSec.appendChild(docImg);
    descriptionSec.appendChild(doctorName);
    descriptionSec.appendChild(doctorType);
    descriptionSec.appendChild(docStatus);
    descriptionSec.appendChild(starIcon);
    descriptionSec.appendChild(rating);
    card.appendChild(imgSec);
    card.appendChild(descriptionSec);
    allCards.appendChild(card);

    return allCards;
}
