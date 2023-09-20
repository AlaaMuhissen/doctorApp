function createDoctorCard(img, name, type, status, rate) {
    // Create the main container for the card
    const allCards = document.createElement("section");
    allCards.setAttribute("class", "cards");

    // Create the card container
    const card = document.createElement("figcaption");
    card.setAttribute("class", "card");
    card.style.width = "348px";
    card.style.height = "112px";
    card.style.border = "1px solid #DEDEDE";
    card.style.display = "flex";
    card.style.borderRadius = "6px";
    card.style.background = "white";
    card.style.marginBottom = "8px";
    card.style.position="relative";


    // Create the image container
    const imgSec = document.createElement("figure");
    imgSec.setAttribute("class", "doctorImg");
    imgSec.style.width = "64px";
    imgSec.style.height = "96px";
    imgSec.style.margin= "8px 8px";
    
    // Create the image element
    const docImg = document.createElement("img");
    docImg.setAttribute("src", img);
    docImg.setAttribute("alt", "docPic");
    docImg.style.width = "100%";
    docImg.style.height = "100%";
    docImg.style.borderRadius = "6px";

    // Create the description container
    const descriptionSec = document.createElement("section");
    descriptionSec.setAttribute("class", "description");
    
    descriptionSec.style.position = "relative";
    descriptionSec.style.marginLeft = "16px";
    descriptionSec.style.marginTop = "16px";
    descriptionSec.style.marginTop = "16px";

   

    const details = document.createElement("section");
    details.setAttribute("class", "AllDocDetails");
    details.style.height="45px";
    details.style.width = "200px";
    details.style.marginBottom = "10px";
    

    // Create the doctor's name element
    const doctorName = document.createElement("h1");
    doctorName.setAttribute("class", "name");
    doctorName.textContent = name;
    doctorName.style.fontSize = "16px";
    doctorName.style.fontWeight = "600";
    doctorName.style.fontFamily= "Inter";
    doctorName.style.margin = "0";
    

    // Create the doctor's type element
    const doctorType = document.createElement("h3");
    doctorType.setAttribute("class", "doctorType");
    doctorType.textContent = type;
    doctorType.style.fontSize = "14px";
    doctorType.style.fontWeight = "400";
    doctorType.style.fontFamily= "Inter";
    doctorType.style.color = "#AAAAAA";
    doctorType.style.margin = "5px 0" ;
   
    
    const otherDetails = document.createElement("section");
    otherDetails.setAttribute("class", "otherDetails");
    otherDetails.style.display="flex";
    otherDetails.style.alignItems="center";
    otherDetails.style.height="26px";
    otherDetails.style.width="70px";

    // Create the doctor's status button
    const docStatus = document.createElement("button");
    docStatus.setAttribute("class", "status");
    docStatus.style.width = "52px";
    docStatus.style.height = "26px";
    docStatus.style.fontSize ="12px";
    docStatus.style.fontWeight = "400";
    docStatus.style.padding = "4px 8px";
    docStatus.style.marginRight = "16px";
    docStatus.style.borderRadius = "4px";
    docStatus.style.border = "1px";
    if(status == true){
        docStatus.textContent = "Online";
        docStatus.style.backgroundColor = "#53A1FD";
        docStatus.style.color = "white";
    }
    else{
        docStatus.textContent = "Offline";
        docStatus.style.backgroundColor = "#DEDEDE";
        docStatus.style.color = "#8D8D8D";
    }
    
    // Create the star icon
    const starIcon = document.createElement("i");
    starIcon.setAttribute("class", "fa fa-star");
    starIcon.style.color = "#F1C644";
    starIcon.style.fontSize = "16px";
    starIcon.style.marginRight = "5px";
     
    
 

    // Create the rating element
    const rating = document.createElement("span");
    rating.setAttribute("class", "rating");
    rating.textContent = rate;
    rating.style.fontSize = "14px";
    rating.style.color= "#AAAAAA";
    rating.style.fontWeight = "400";


    // Append elements to their respective containers

    imgSec.appendChild(docImg);
    descriptionSec.appendChild(details);
    details.appendChild(doctorName);
    details.appendChild(doctorType);
    descriptionSec.appendChild(otherDetails);
    otherDetails.appendChild(docStatus);
    otherDetails.appendChild(starIcon);
    otherDetails.appendChild(rating);
    card.appendChild(imgSec);
    card.appendChild(descriptionSec);
    allCards.appendChild(card);

    return allCards;
}
