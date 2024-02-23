import { starffList } from "./constant.js";
import { generateStaffCards } from "./ui.js";
import { getSelectStaffCard } from "./utils.js";
const sectionContent = document.querySelector(".section-content");
const sectionHead = document.querySelector(".section-head-title");
sectionContent.innerHTML = generateStaffCards(starffList);
const backBtn = document.querySelector(".back");
const nexBtn = document.querySelector(".next");
const error = document.querySelector(".error");
const errorText = error.querySelector("p");
const tabs = document.querySelectorAll("aside ul li");
const staffTab = document.querySelector(".staff-tab");
const serviceTab = document.querySelector(".service-tab");
nexBtn.addEventListener("click", (e) => {
  const inner = sectionHead.innerHTML;
  const createDone = `<img src="../../src/images/share/done.svg" alt='done'/>`;
  if (inner.includes("staff")) {
    if (!localStorage.getItem("staffName")) {
      error.style.display = "flex";
      errorText.innerHTML = "Select staff";

      return;
    }

    staffTab.classList.add("done");
    serviceTab.classList.add("active");
    let tabInner = staffTab.querySelector("span");
    tabInner.innerHTML = createDone;
    error.style.display = "none";
    backBtn.style.display = "block";
    sectionContent.innerHTML = `<h2>${"Service"}</h2>`;
    sectionHead.innerHTML = "Service";
  } else if (inner.includes("Service")) {
    sectionContent.innerHTML = `<h2>${"Date & Time"}</h2>`;
    sectionHead.innerHTML = "Date & Time";
  } else if (inner.includes("Date")) {
    sectionContent.innerHTML = `<h2>${"Confirmation"}</h2>`;
    sectionHead.innerHTML = "Confirmation";
  } else {
    return;
  }
});
backBtn.addEventListener("click", (e) => {
  const inner = sectionHead.innerHTML;

  if (inner.includes("Confirmation")) {
    sectionContent.innerHTML = `<h2>${"Date & Time"}</h2>`;
    sectionHead.innerHTML = "Date & Time";
  } else if (inner.includes("Date")) {
    sectionContent.innerHTML = `<h2>${"Service"}</h2>`;
    sectionHead.innerHTML = "Service";
  } else if (inner.includes("Service")) {
    serviceTab.classList.remove("active");

    staffTab.classList.remove("done");
    sectionContent.innerHTML = `<h2>${"Staff"}</h2>`;
    sectionHead.innerHTML = "Select staff";
    backBtn.style.display = "none";
    sectionContent.innerHTML = generateStaffCards(starffList);
    getSelectStaffCard();
  }
});

// select staff start

getSelectStaffCard();
// select staff end
