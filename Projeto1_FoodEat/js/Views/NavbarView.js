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
        <button class="btn btn-primary" type="button">
            <img src="${User.getUserLogged().avatar}">
        </button>`
    } else {
        result += `
        <button class="btn btn-primary" type="button">LOGIN/REGISTER</button>`
    }
document.querySelector("nav").innerHTML = result;   
}

navbarView();