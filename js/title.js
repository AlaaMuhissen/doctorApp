function createTitle(title) {
    // Create the main section for the title
    let pageTitle = document.createElement("section");
    pageTitle.setAttribute("class", "titleField");
    pageTitle.style.marginTop = "75px";
    pageTitle.style.marginBottom= "24px";
    pageTitle.style.marginLeft = "24px";
    // Create the title element h1
    let theTitle = document.createElement("h1");
    theTitle.setAttribute("class", "TheTitle");
    theTitle.textContent = title;
    theTitle.style.fontFamily = "Inter";
    theTitle.style.fontWeight = "700";
    theTitle.style.fontSize = "32px";

    // Append the title element to the main section
    pageTitle.appendChild(theTitle);

    document.body.appendChild(pageTitle);
}
