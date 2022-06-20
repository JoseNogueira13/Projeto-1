import * as User from "../Models/UserModel.js";

document.getElementById("txtExperienceAdd").readOnly = true;
document.getElementById("txtBadgesAdd").readOnly = true;
document.getElementById("txtSavedAdd").readOnly = true;
document.getElementById("txtAvatarAdd").readOnly = true;


function addUser() {
    User.init();
    manageUsersTable(User.getUsers());
    document.querySelector("#formAddUser").addEventListener("submit", (event) => {
        event.preventDefault();

        

        try{
            User.addUser(
                document.querySelector("#txtUsernameAdd").value,
                document.querySelector("#txtPasswordAdd").value,
                document.querySelector("#txtEmailAdd").value,
                document.querySelector('input[name="userType"]:checked').value,
                
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

