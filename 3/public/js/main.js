const signupBtn = document.getElementById("signup-btm");
const fnameInput = document.getElementById("fname-input");
const lnameInput = document.getElementById("lname-input");
const userNameInput = document.getElementById("username-input");
const passInput = document.getElementById("pass-input");
const genderInput = document.getElementById("gender-input");
const fnameError = document.getElementById("fname-err");
const lnameError = document.getElementById("lname-err");
const usernameError = document.getElementById("username-err");
const selectBoxError = document.getElementById("selectbox-err");
const passError = document.getElementById("pass-err");

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return [await response.json() ,response.status]
}




signupBtn.addEventListener("click", async () => {
  const [fnameFlag, fnameMessage] = fnameValidation(fnameInput.value);
  if (!fnameFlag) fnameError.innerText = fnameMessage;

  const [lnameFlag, lnameMessage] = lnameValidation(lnameInput.value);
  if (!lnameFlag) lnameError.innerText = lnameMessage;

  const [usernameFlag, usernameMessage] = usernameValidation(
    userNameInput.value
  );
  if (!usernameFlag) usernameError.innerText = usernameMessage;

  const [genderFlag, genderMessage] = genderValidation(genderInput.value);
  if (!genderFlag) selectBoxError.innerText = genderMessage;

  const [passwordFlag, passwordMessage] = passwordValidation(passInput.value);
  if(!passwordFlag) passError.innerText = passwordMessage;

  if(!fnameFlag || !lnameFlag || !usernameFlag || !genderFlag || !passwordFlag) return ;


  const newData = {
    firsname: fnameInput.value,
    lastname: lnameInput.value,
    gender: genderInput.value,
    username: userNameInput.value,
    password: passInput.value,
  };


  const status = await postData(
    "http://localhost:3000/auth/createUser",
    newData
  );

  if(status[1] == 201){
    console.log("creatuser");
    alert("user created")
  }
  if(status[1] == 409){

    usernameError.innerText = "please chanage your username this username exist"
  }


});
