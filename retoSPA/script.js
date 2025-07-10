// document.getElementById("navBar").addEventListener("click", function(event){
//     if (event.target.tagName === "A"){
//         event.preventDefault();
//         console.log(event.target);
//         console.log(event.currentTarget);
//         console.log(event.target.getAttribute("href"));
//     }
// });

// let content = document.getElementById('content')

// fetch("./pages/login.html")
//   .then(response => response.text())
//   .then(data => {
//     console.log(data);
//     content.innerHTML=data
//   })
//   .catch(error => console.error("Error: ", error))

// fetch("http://localhost:3000/users/")
//   .then(response => response.json())
//   .then(data => {
//     const usuario = data.find(email => email.email == "ana.torres@example.com");
//     console.log(`Hola: ${usuario.name}`)
//   })
//   .catch(error => console.log("ERROR: ",error));

if (!sessionStorage.getItem("id")) {
  fetch("./pages/login.html")
    .then(response => response.text())
    .then(data => {
      console.log(data);
      content.innerHTML = data
      document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const inputEmail = this.querySelector("#email").value;
        const pass = this.querySelector("#password").value;
        fetch("http://localhost:3000/users/")
          .then(response => response.json())
          .then(data => {
            const usuario = data.find(userEmail => userEmail.email == inputEmail);
            if (!usuario || usuario.password != pass){
              alert("Usuario o contraseña incorrectas")
            }
            else{
              userEntered(usuario);
            }
          })
      })
    })
    .catch(error => console.error("Error: ", error))
}

function userEntered(userInfo){
  document.querySelector('.sessionUserName').textContent = userInfo.name
  document.querySelector('.sessionUserRole').textContent = userInfo.rol
  fetch("./pages/users.html")
    .then(response => response.text())
    .then(data => {
      content.innerHTML=data
    })
    .catch(error => console.error("Error: ", error))
}

function logOut(){
  localStorage.clear()
  return
}