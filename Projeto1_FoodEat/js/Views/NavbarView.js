import * as User from "../Models/UserModel.js";

function navbarView() {
    console.log("iniciei");
    User.init();

    let result =`
    <a class= "navbarLogo ml-2" href="../index.html">
            <img src="./media/FOODEAT1.png" style="height:100px; width:300px; margin-left: 15px;">
    </a>
        
        <button class="btn btn-primary" type="button">HOME</button>
        <button class="btn btn-primary" type="button">RECIPES</button>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            REGIONS
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="margin-left: 500px;">
            <li><a class="dropdown-item" href="#">Asia</a></li>
            <li><a class="dropdown-item" href="#">Europe</a></li>
            <li><a class="dropdown-item" href="#">Africa</a></li>
          </ul>
    `;
    
    if (User.isLogged()) {
        result += `
        <button id="btnUser" class="btn btn-primary" type="button">
            <img src="${User.getUserLogged().avatar}">
        </button>`
    } else {
        result += `
        <button id="btnUserLogin" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mdlLogin">Login</button>
        <button id="btnUserRegister" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mdlRegister">Register</button>`
    }
    // colocar o conteudo na navbar dependendo do estado de login do utilizador
document.querySelector("nav").innerHTML = result;   

// BOTÃO DE LOGIN
document.querySelector("#frmLogin").addEventListener("submit",(event) => {
    event.preventDefault();
    try {
        User.login(
            document.getElementById("txtUsername").value,
            document.getElementById("txtPassword").value,
        );
        signupMessage("msgLogin", "User logged in with sucess!", "sucess");

        setTimeout(() => {
            location.reload();
        }, 1000);
    }catch (error)  {
        signupMessage("msgLogin", error.message, "danger");
    }
})
}

function signupMessage(modal, message, type) {
    const divMessage = document.getElementById(modal);
    divMessage.innerHTML = `<div class = "alert alert-${type}" role = "alert"> ${message}</div>`;
    setTimeout(() => {
        divMessage.innerHTML = ""
    }, 1000);
}

navbarView();