import * as User from "../Models/UserModel.js";

document.getElementById("txtExperienceRegister").readOnly = true;
document.getElementById("txtBadgesRegister").readOnly = true;
document.getElementById("txtSavedRegister").readOnly = true;
document.getElementById("txtAvatarRegister").readOnly = true;


function addUser() {
    User.init();
    manageUsersTable(User.getUsers());
    document.querySelector("#formAddUser").addEventListener("submit", (event) => {
        event.preventDefault();

        

        try{
            User.addUser(
                document.querySelector("#txtUsernameRegister").value,
                document.querySelector("#txtPasswordRegister").value,
                document.querySelector("#txtEmailRegister").value,
                document.querySelector("#txtExperienceRegister").value,
                document.querySelector("#txtBadgesRegister").value,
                document.querySelector("#txtSavedRegister").value,
                document.querySelector('input[name="userType"]:checked').value,
                document.querySelector("#txtAvatarRegister").value,
            )
            alert("User was added")
            manageUsersTable(User.getUsers());
            location.reload();
        } catch (error) {
            alert(error.message)
        }
    })
}


function manageUsersTable (users = []) {
    const table = document.querySelector('table');

    table.innerHTML = `
    <tr class = "table-bordered">
        <th>Username</th><th>Password</th><th>E-mail</th><th>profileType</th>
    </tr>`
    
    let result = ''
    for (let user of users) {
        result += `
                <tr class = "userRow">
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.email}</td>
                <td>${user.profileType}</td> <td>   <button class = "btnRemove btn-danger removeUser" id = "${user.username}">Remove</button>   </td>
                </tr>
                `
    }
    table.innerHTML += result
}


addUser();


const btnsRemoveUser = document.getElementsByClassName('removeUser');

for (const button of btnsRemoveUser) {
    button.addEventListener('click', () => {
        if(confirm(`Are you sure you want to remove the user "${button.id}"?`)) {
            User.removeUser(button.id);
            location.reload();
        }
    }) 
}

