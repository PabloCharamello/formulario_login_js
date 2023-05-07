let userName = "prueba";
let pass = "1234";

function login() {
  let user, password;

  user = document.getElementById("user").value;
  password = document.getElementById("password").value;

  if (user === userName && password === pass) {
    window.location = "index2.html";
  } else {
    alert("Credenciales incorrectas");
  }
}
