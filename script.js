let section = document.createElement("section");
let containerdiv = document.createElement("div");
containerdiv.setAttribute("class", "container");
section.appendChild(containerdiv);

async function usersList() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    for (let card of data) {
      let carddiv = document.createElement("div");

      carddiv.innerHTML = `
                      <div class="card  bg-info-subtle shadow">
                      <div class="card-body ">
                        <p class="card-title fw-bold"> Name: ${card.name}</p>
                        <p class="card-text"> Email:  ${card.email}</p>
                        <p class="card-text"> Street: ${card.address.street}</p>
                        <p class="card-text"> City:   ${card.address.city}</p>
                      </div>
                    </div>
                      `;
      containerdiv.append(carddiv);
    }
  } catch (error) {
    console.log("error fetching data");
  }
}
usersList();
document.body.append(section);

