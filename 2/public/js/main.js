// const handelOnclickRow = (id) => {
// console.log(id);
// const productUserClick = data.filter(product => product.id === id )
// generateContentmodalbody()
// };


let selectedId = -1;

const main = async () => {
  // try cacht
  const responseObject = await fetch(
    "http://localhost:3000/product/productGet"
  );
  const data = await responseObject.json();
  renderTable(data);
  this.handelOnclickRow = (id) => {
    selectedId = id;
    updateBtn.classList.add("d-none");
    removeBtn.classList.add("d-none");
    editBtn.classList.remove("d-none");
    const productUserClick = data.find((product) => product.id === id);
    generateInfoModal(productUserClick);
  };

  editBtn.addEventListener("click", () => {
    updateBtn.classList.remove("d-none");
    removeBtn.classList.remove("d-none");
    editBtn.classList.add("d-none");
    const productEdit = data.find((product) => product.id === selectedId);
    generateEditModal(productEdit);
  });
};


removeBtn.addEventListener("click", () => {
  const data = {
    id: selectedId,
  };
  deleteData("http://localhost:3000/product/deleteProduct", data)
    .then((data) => renderTable(data))
    .catch((error) => console.log(error));
});

updateBtn.addEventListener("click", () => {
  
  const updateObject = {
    id:  document.getElementById("id").value,
    title: document.getElementById("title").value,
    price:  document.getElementById("price").value,
    rating: document.getElementById("rating").value,
    stock: document.getElementById("stock").value,
    brand: document.getElementById("brand").value,
    category: document.getElementById("category").value
  };
  console.log(updateObject);
  putData("http://localhost:3000/product/updateProduct",updateObject)
  .then(data => renderTable(data) )
  .catch(error => console.log(error))
});

createBtn.addEventListener("click", () => {
  const newProduct = {
    id:createID.value,
    title:createTitle.value,
    price:createPrice.value,
    rating:createRating.value,
    stock:createStock.value,
    brand:createBrand.value,
    category:createCategory.value
  }
  postData("http://localhost:3000/product/createProduct",newProduct)
    .then((data) => renderTable(data))
    .catch((error) => console.log(error));
});

async function deleteData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function putData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

main();
