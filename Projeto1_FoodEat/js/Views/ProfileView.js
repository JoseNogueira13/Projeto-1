import * as User from "../Models/UserModel.js";

const users = JSON.parse(localStorage.getItem("users"))

function profileUserStart(){
    User.init()
    User.getUserLogged()
}
profileUserStart()


document.querySelector("#profileUsername").innerHTML = User.getUserLogged().username;

document.querySelector("#profileEmail").innerHTML = User.getUserLogged().email;


document.querySelector("#frmChangePassword").addEventListener("submit",(event) => {
    event.preventDefault();

    const currentPassword = document.querySelector("#txtCurrentPassword").value;
    const newPassword = document.querySelector("#txtNewPassword").value;
    const confirmNewPassword = document.querySelector("#txtConfirmNewPassword").value;


for (let user of users) {
    if (user.username == User.getUserLogged().username) {
        if (currentPassword == user.password) {
            if (newPassword == confirmNewPassword) {
                if (currentPassword != newPassword) {
                    user.password = newPassword;
                    localStorage.setItem("users", JSON.stringify(users))
                    User.refresh(user);
                    location.reload()
                } else {
                    alert("The new password cannot be the same as the current password")
                }
            }else {
                alert("The passwords do not match!")
            }
        } else{
            alert("The current password is not correct")
        }

      
    }
  }
})



    
    let result = `
    <div class="col">
            <div class="card mb-3" style="widht: 300px;">
                <img src="${User.getUserLogged().avatar}" class="card-img-top" style="width:300px">
                <div class="card-body">
                    <h5 class="card-title">${User.getUserLogged().username}</h5>
                    <p class="card-text"></p>
                    <button id="${User.getUserLogged().username}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#avatarModalLabel">Choose another one!</button>`;


    result += ` 
                </div>
            </div>
        </div> `
    
document.querySelector('#profileUserAvatar').innerHTML = result


if (User.getUserLogged().experience < 100) {
    document.querySelector("#avatarTitleLvl2").style.color = "grey";
    document.querySelector("#avatar3").disabled = true;
    document.querySelector("#avatar4").disabled = true;
}

if (User.getUserLogged().experience < 200) {
    document.querySelector("#avatarTitleLvl3").style.color = "grey";
    document.querySelector("#avatar5").disabled = true;
    document.querySelector("#avatar6").disabled = true;
}

if (User.getUserLogged().experience < 300) {
    document.querySelector("#avatarTitleLvl4").style.color = "grey";
    document.querySelector("#avatar7").disabled = true;
    document.querySelector("#avatar8").disabled = true;
}

if (User.getUserLogged().experience < 400) {
    document.querySelector("#avatarTitleLvl5").style.color = "grey";
    document.querySelector("#avatar9").disabled = true;
    document.querySelector("#avatar10").disabled = true;
}

if (User.getUserLogged().experience < 500) {
    document.querySelector("#avatarTitleLvl6").style.color = "grey";
    document.querySelector("#avatar11").disabled = true;
    document.querySelector("#avatar12").disabled = true;
}

console.log("hello");
const btnsSelect = document.getElementsByClassName("avatarSelect");
    console.log("entrei");
    for (const button of btnsSelect) {
        button.addEventListener("click", function () {
            
            for (let user of users) {
                if (user.username == User.getUserLogged().username) {
                    user.avatar = button.getAttribute("src")
                  localStorage.setItem("users", JSON.stringify(users))
                  User.refresh(user);
                  location.reload()
                }
              }
        });
    }


