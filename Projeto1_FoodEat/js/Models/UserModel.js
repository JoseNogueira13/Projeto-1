class User {
    username = "";
    password = "";
    email = "";
    profileType = "";
    experience = 0;
    badges = [];
    saved = [];
    
    avatar = "";
    quizzesDone = []
    
    
    constructor(username, password, email,profileType, experience, badges, saved,  avatar, quizzesDone) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.profileType = profileType;
        this.experience = experience;
        this.badges = badges;
        this.saved = saved;
        this.avatar = avatar;
        this.quizzesDone = quizzesDone;
        
      }
}
let users;
// buscar utilizadores da local storage
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}
// registar utilizador
export function registerUser(username, password, email,profileType, experience, badges, saved,  avatar, quizzesDone){
  if (users.some((user) => user.username === username)){
    throw Error(`Username "${username}" already exists!`)
  }else{
    experience = 0
    badges = [];
    saved = [];
    profileType = "user";
    avatar = "";
    quizzesDone = []

    users.push(new User(username, password, email,profileType, experience, badges, saved,  avatar, quizzesDone));
    localStorage.setItem("users", JSON.stringify(users))
  }
}
//ADICIONAR UTILIZADOR  
export function addUser(username, password, email,profileType, experience, badges, saved,  avatar, quizzesDone) {
  if (users.some((user) => user.username === username)){
    throw Error(`Username "${username}" already exists!`)
  }else{
    experience = 0
    badges = [];
    saved = [];
    avatar = "";
    quizzesDone = []

    users.push(new User(username, password, email,profileType, experience, badges, saved,  avatar, quizzesDone));
    localStorage.setItem("users", JSON.stringify(users))
  }
}

//REMOVER UTILIZADORES
export function removeUser(username) {
  users = users.filter((user) => user.username !== username);
  localStorage.setItem("users", JSON.stringify(users))
}
// Login do utilizador
export function login(username, password){
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  }else{
    throw Error("Invalid Login!");
  }
}
// logout do utilizadores
export function logout(){
  sessionStorage.removeItem("loggedUser");
  
}

//REFRESH SESSION STORAGE
export function refresh(user) {
  sessionStorage.removeItem("loggedUser");
  sessionStorage.setItem("loggedUser", JSON.stringify(user))
}

//verificar se existe um utilizador com sessão iniciada

export function isLogged(){
  return sessionStorage.getItem("loggedUser") ? true : false;
}
// buscar informação do utilizador com sessão iniciada
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}
//OBTER UTILIZADORES
export function getUsers () {
  return users;
}

/*if (!localStorage.users) {
  const users = [
    {
      username: "user1",
      password: "pass1",
      email: "123@gmail.com",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCFwPvF25NroCaraLGyv0MqVbBPlDK_XX-Q&usqp=CAU"
    },
  ];
  console.log("inject");
  localStorage.setItem("users", JSON.stringify(users));
  sessionStorage.setItem("loggedUser", JSON.stringify(users));
}*/



