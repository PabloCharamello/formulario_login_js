function login() {
  let user, password;

  user = document.getElementById("user").value;
  password = document.getElementById("password").value;

  if (user === "prueba" && password === "1234") {
    window.location = "index2.html";
  } else {
    alert("Credenciales incorrectas");
  }
}
