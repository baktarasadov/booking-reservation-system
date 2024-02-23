export const getSelectStaffCard = () => {
  const cards = document.querySelectorAll(".card-item");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      let name = card.querySelector("h3").textContent;
      cards.forEach((c) => {
        c.classList.remove("select-Card");
      });
      if (localStorage.getItem("staffName") == name) {
        localStorage.removeItem("staffName");
        return;
      }
      card.classList.toggle("select-Card");
      localStorage.setItem("staffName", name);
    });
  });
};
