const tableBody = document.querySelector("tbody");
const modalBodyHandelOnclick = document.querySelector("#modal-body");
const deletBtn = document.getElementById('delet-btn');

const renderTable = (users) => {
  tableBody.innerHTML = "";
  for (const user of users) {
    tableBody.innerHTML += `
    <tr onclick="handelOnclickRow('${user.username}')" data-bs-toggle="modal" data-bs-target="#modal-info">
        <td>${user.username}</td>
        <td>${user.firsname}</td>
        <td>${user.lastname}</td>
        <td>${user.gender}</td>
      </tr>`;
  }
};

const generateInfoModal = (userClick) => {
  const {firsname,lastname,username,gender} = userClick
  modalBodyHandelOnclick.innerHTML = `
  <p class="fw-bold">Username: ${username}</p>
  <p class="fw-bold">Firstname: ${firsname}</p>
  <p class="fw-bold">Lastname: ${lastname}</p>
  <p class="fw-bold">Gender: ${gender}</p>
  `;
};

async function deletData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}


let selected = -1;

const main = async () => {
  const response = await fetch("http://localhost:3000/admin/userinfo");
  const data = await response.json();
  renderTable(data);
  this.handelOnclickRow = (username) => {
  selected = username
  const found = data.filter(item => item.username === username);
  generateInfoModal(found)
  };
};

main();

deletBtn.addEventListener('click', async() =>{
  const userDelete ={username:selected}
  console.log(userDelete)

  const response = await deletData("http://localhost:3000/admin/deleteuser",userDelete)

  renderTable(response)
})