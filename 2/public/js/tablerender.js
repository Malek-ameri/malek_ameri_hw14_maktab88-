const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
const modalBodyHandelOnclick = document.querySelector("#modal-body");
const editBtn = document.querySelector('#edit-btn');
const updateBtn = document.querySelector('#update-btn');
const removeBtn = document.querySelector('#remove-btn');
const createBtn = document.querySelector('#creat-product')
const createID = document.querySelector('#create-id')
const createTitle = document.querySelector('#create-title')
const createPrice = document.querySelector('#create-price')
const createRating = document.querySelector('#create-rating')
const createStock = document.querySelector('#create-stock')
const createBrand = document.querySelector('#create-brand')
const createCategory = document.querySelector('#create-category')



const generateInfoModal = (productUserClick) => {
  const {id,title,price,rating,stock,brand,category} = productUserClick
  modalBodyHandelOnclick.innerHTML = `
  <p class="fw-bold">ID: ${id}</p>
  <p class="fw-bold">Title: ${title}</p>
  <p class="fw-bold">Price: ${price}</p>
  <p class="fw-bold">Rating: ${rating}</p>
  <p class="fw-bold">Stock: ${stock}</p>
  <p class="fw-bold">Brand: ${brand}</p>
  <p class="fw-bold">Category: ${category}</p>
  `;
};

const generateEditModal = (user) =>{
  const {id,title,price,rating,stock,brand,category} = user
  modalBodyHandelOnclick.innerHTML=`
  
  <div class="input-group input-group-sm mb-3">
  <span class="input-group-text px-4" id="inputGroup-sizing-sm">ID</span>
  <input id="id" value="${id}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>

  <div class="input-group input-group-sm mb-3">
   <span class="input-group-text px-3" id="inputGroup-sizing-sm">Title</span>
   <input id="title" value="${title}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>
  
  <div class="input-group input-group-sm mb-3">
   <span class="input-group-text px-2" id="inputGroup-sizing-sm">Rating</span>
   <input id="price" value="${price}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>

  <div class="input-group input-group-sm mb-3">
   <span class="input-group-text px-3" id="inputGroup-sizing-sm">Price</span>
   <input id="rating" value="${rating}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>

  <div class="input-group input-group-sm mb-3">
   <span class="input-group-text px-3" id="inputGroup-sizing-sm">Stock</span>
   <input id="stock" value="${stock}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>

  <div class="input-group input-group-sm mb-3">
   <span class="input-group-text px-3" id="inputGroup-sizing-sm">Brand</span>
   <input id="brand" value="${brand}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>

  <div class="input-group input-group-sm mb-2">
   <span class="input-group-text " id="inputGroup-sizing-sm">Category</span>
   <input id="category" value="${category}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>
  `
}
// const handelOnclickRow = (id) => {
  // id = selectedId
  // console.log(id);
  // const productUserClick = data.filter(product => product.id === id )
  // generateContentmodalbody()
// };
const renderTable = (products) => {
  tableBody.innerHTML = ""
  let rowCount = 1;
  for (const product of products) {
    tableBody.innerHTML += `
      <tr onclick="handelOnclickRow(${product.id})" data-bs-toggle="modal" data-bs-target="#modal-info">
        <th scope="row">${rowCount}</th>
        <td class="id">${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.rating}</td>
        <td>${product.stock}</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
      </tr>`;

    rowCount += 1;
  }
};
