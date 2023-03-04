const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("pass-input");
const usernameErr = document.getElementById("username-err");
const passErr = document.getElementById("pass-err");
const loginBtn = document.getElementById("login-btn");

const emptyValidation = (firstname) => {
  firstname = firstname ?? "";
  if (firstname.trim() === "") return [false, "please fill out this field"];
  return [true, "ok"];
};

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return [await response.json(), response.status];
}

loginBtn.addEventListener("click", async() => {
  usernameErr.innerText = "";
  passErr.innerText = "";
  const [usernameFlag, usernameMessage] = emptyValidation(usernameInput.value);
  if (!usernameFlag) usernameErr.innerText = usernameMessage;

  const [passFlag, passMessage] = emptyValidation(passwordInput.value);
  if (!passFlag) passErr.innerText = passMessage;

  if (!usernameFlag || !passFlag) return;

  const newData = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  const status =await postData ('http://localhost:3000/auth/loginUser',newData)
  console.log(status)

  if(status[1] == 445) return usernameErr.innerText = status[0].username;
  if(status[1] == 410) return passErr.innerText = status[0].password;
  if(status[1] ==200) return alert("Login is successful")

});
