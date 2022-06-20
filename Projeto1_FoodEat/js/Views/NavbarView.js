import * as User from "../Models/UserModel.js";

function navbarView() {
    console.log("iniciei");
    User.init();

    
    
    let result =`
    <a class= "navbarLogo ml-2" href="./index.html">
            <img src="./media/FOODEAT1.png" style="height:100px; width:300px; margin-left: 15px;"/>
    </a>
        
        <button class="btn btn-primary" type="button">HOME</button>
        <button class="btn btn-primary" type="button">RECIPES</button>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            REGIONS
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="margin-left: 500px;">`
          
          for (const region of JSON.parse(localStorage.regions)) {
            result += `<li><a class="dropdown-item" href="./html/Recipes.html">${region.title}</a></li>`
          }
          result += ` 
          </ul>`
    ;
    
    if (User.isLogged()) {
        if (User.getUserLogged().profileType == "admin") {
            console.log('botao admin');
            result += `
            <button class="btn btn-secondary dropdown-toggle" type="button" id="admin" data-bs-toggle="dropdown" aria-expanded="false">MANAGE INFO
            </button>
            <ul class="dropdown-menu" aria-labelledby="admin" style="margin-left: 500px;">
                <li><a class="dropdown-item" href="./html/manageRecipes.html">Recipe</a></li>
                <li><a class="dropdown-item" href="./html/manageUsers.html">Users</a></li>
                <li><a class="dropdown-item" href="./html/manageRegions.html">Regions</a></li>
            </ul>
        
            `
        }
        result += `
        <button id="btnUser" class="btn btn-primary" type="button">
            <img src="${User.getUserLogged().avatar}">
        </button>
        <button id="btnLogout" class="btn btn-outline-success m-2 my-sm-0">
                            Logout
        </button>`
    }   else {
        result += `
        <button id="btnUserLogin" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mdlLogin">Login</button>
        <button id="btnUserRegister" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mdlRegister">Register</button>

        `
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
        signupMessage("msgLogin", "User logged in with sucess!", "success");

        setTimeout(() => {
            location.reload();
        }, 1000);
    }catch (e)  {
        signupMessage("msgLogin", e.message, "danger");
    }
})
//BOTAO DE REGISTER
document.querySelector("#frmRegister").addEventListener("submit",(event) => {
    event.preventDefault();
    
    const registerUsername = document.getElementById("txtUsernameRegister");
    const registerPassword = document.getElementById("txtPasswordRegister");
    const registerPasswordConfirm = document.getElementById("txtPasswordRegisterConfirm");
    const emailRegister = document.getElementById("txtEmailRegister");
    try {
        if (registerPassword.value !== registerPasswordConfirm.value) {
            throw Error("The passwords do not match");
        }
        User.registerUser(registerUsername.value, registerPassword.value, emailRegister.value);
        signupMessage("msgRegister", "Registration successfull!", "success");
        setTimeout(() => {
           location.reload(); 
        }, 1000);
    } catch (e) {
        signupMessage("msgRegister", e.message, "danger")
    }
})

// CLICAR NO BOTAO LOGOUT 
try {
    document.querySelector("#btnLogout").addEventListener("click", () => {
    User.logout();
    location.reload();
  });
} catch (error) {
    
}

}

function signupMessage(modal, message, type) {
    const divMessage = document.getElementById(modal);
    divMessage.innerHTML = `<div class= "alert alert-${type}" role="alert">${message}</div>`;
    setTimeout(() => {
      divMessage.innerHTML = "";
    }, 2000);

}

navbarView();