export const generateStaffCards = (staff) => {
  let staffCards = "";
  const getName = localStorage.getItem("staffName");
  staff.forEach((person) => {
    staffCards += `
          <li class="card-item ${person.name == getName && "select-Card"}">
            <div class="card-item-left">
              <img src="${person.image}" alt=${person.name} />
            </div>
            <div class="card-item-right">
              <h3>${person.name}</h3>
              <p>${person.email}</p>
            </div>
          </li>
        `;
  });

  return `
        <ul class="card-list">
          ${staffCards}
        </ul>
      `;
};
