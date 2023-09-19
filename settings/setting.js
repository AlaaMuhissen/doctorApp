const setting_name = ["Personal", "General"];

const qValue1 = [
  {
    name: "Account",
    icon: "far fa-user",
  },
  {
    name: "Personal Data",
    icon: "fas fa-notes-medical",
  },
];
const qValue2 = [
  {
    name: "Notification",
    icon: "far fa-bell",
  },
  {
    name: "Security",
    icon: "fas fa-user-shield",
  },
  {
    name: "Help",
    icon: "fas fa-info help",
  },
  {
    name: "About",
    icon: "fas fa-info about",
  },
];
name("Personal", 2, qValue1);
name("General", 4, qValue2);

function name(categoryName, rowsNum, qValue) {
  const section_container = document.createElement("section");
  section_container.setAttribute("class", "section-container");
  const main = document.querySelector("main");
  main.appendChild(section_container);

  const category_name = document.createElement("H3");
  category_name.textContent = categoryName;
  section_container.appendChild(category_name);

  qValue.forEach((settingValue) => {
    const qValues = document.createElement("section");
    qValues.setAttribute("class", "qValue-container");
    section_container.appendChild(qValues);

    const icon = document.createElement("i");
    icon.setAttribute("class", settingValue.icon);
    const items = document.createElement("section");
    items.setAttribute("class", "items");
    items.textContent = settingValue.name;
    qValues.append(icon, items);
  });
}
