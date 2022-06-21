import * as Recipe from "../models/RecipeModel.js";
import * as Quizz from "../models/QuizzModel.js";
import * as User from "../models/UserModel.js";

const users = JSON.parse(localStorage.getItem("users"))
const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))

function recipeView() {
Recipe.init();


  const recipe = Recipe.getCurrentRecipe();
  document.querySelector("#recipeName").innerHTML = recipe.title;
  document.querySelector("#recipeType").innerHTML = recipe.type[0].toUpperCase() + recipe.type.slice(1);
  document.querySelector("#recipeDescription").innerHTML = recipe.description;
  document.querySelector("#recipePhoto").src = recipe.image;
  document.querySelector("#recipeWritten").innerHTML = recipe.recipeWritten

  
  const video = document.querySelector('#video');
  
  console.log(video.src);
  video.src = recipe.recipeVideo
}

function startQuizz () {
  Quizz.init();
  
  

  const quizz = Quizz.getCurrentQuizz();
  
  
  
  try {
    document.querySelector('#quizzTitle').innerHTML = quizz.title;
    document.querySelector('#quizzQuestion').innerHTML = quizz.question
    document.querySelector('#answer1').innerHTML = quizz.answer1;
    document.querySelector('#answer2').innerHTML = quizz.answer2;
    document.querySelector('#answer3').innerHTML = quizz.answer3;
    document.querySelector('#answer4').innerHTML = quizz.answer4;
  } catch (error) {
    document.querySelector('#btnQuizzModal').disabled = true;
    document.querySelector('#btnQuizzModal').innerHTML = "This recipe does not have a quizz yet. Wait for further release!";
    
  }

}


startQuizz()

recipeView();

if (User.isLogged()) {
  for (let user of users) {
    if (user.username == User.getUserLogged().username) {
      let userQuizz = JSON.parse(sessionStorage.getItem("loggedUser")).quizzesDone;
      let user = JSON.parse(sessionStorage.getItem("loggedUser"));
      let currentQuizz = JSON.parse(sessionStorage.getItem("currentQuizz")).title;

      //for (let quizz of user.quizzesDone) {
      for (let i = 0 ; i < user.quizzesDone.length; i++) {
       
        console.log();
        console.log(user.quizzesDone[i]);
        console.log(currentQuizz);
        if (user.quizzesDone[i] != currentQuizz) {
          for (const button of document.getElementsByClassName('quizzStart')) {
            if (button.disabled != true) {
              console.log(document.getElementsByClassName('quizzStart'));
            
              button.disabled = false;
            }
          }
        }else{
          for (const button of document.getElementsByClassName('quizzStart')) {
            button.disabled = true;
            button.innerHTML = "Quizz Completed!"
          }
        }
      }
    }
  }
  
}
else{
  document.querySelector('#btnQuizzModal').style.display = "none";
}



const btn1 = document.querySelector('#answer1');
const btn2 = document.querySelector('#answer2');
const btn3 = document.querySelector('#answer3');
const btn4 = document.querySelector('#answer4');

btn1.addEventListener('click', function() {
  const quizz = Quizz.getCurrentQuizz();
  
  if (btn1.innerHTML === quizz.correctAnswer) {
    btn1.style.backgroundColor = 'green';
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;

    User.getUserLogged().quizzesDone 
    const quizzNames = Object.values(User.getUserLogged().quizzesDone);

    quizzNames.push(quizz.title) 
    let userQuizz = JSON.parse(sessionStorage.getItem("loggedUser")).quizzesDone;
    userQuizz = quizzNames
    for (let user of users) {
      if (user.username == User.getUserLogged().username) {
        user.quizzesDone = quizzNames
        user.experience += 100
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser))
        User.refresh(user);
        Timeout();
      }
    }

  }else{
    btn1.style.backgroundColor = 'red';
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    Timeout();
    


  }
})


btn2.addEventListener('click', function() {
  const quizz = Quizz.getCurrentQuizz();
  

  if (btn2.innerHTML === quizz.correctAnswer) {
    btn2.style.backgroundColor = 'green';
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;

    User.getUserLogged().quizzesDone 
    const quizzNames = Object.values(User.getUserLogged().quizzesDone);

    quizzNames.push(quizz.title) 
    let userQuizz = JSON.parse(sessionStorage.getItem("loggedUser")).quizzesDone;
    userQuizz = quizzNames
    for (let user of users) {
      if (user.username == User.getUserLogged().username) {
        user.quizzesDone = quizzNames
        user.experience += 100
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser))
        User.refresh(user);
        Timeout();
      }
    }
  }else{
    btn2.style.backgroundColor = 'red';
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    Timeout();
  }
})

btn3.addEventListener('click', function() {
  const quizz = Quizz.getCurrentQuizz();
  
  if (btn3.innerHTML === quizz.correctAnswer) {
    btn3.style.backgroundColor = 'green';
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    
    User.getUserLogged().quizzesDone 
    const quizzNames = Object.values(User.getUserLogged().quizzesDone);
    
    quizzNames.push(quizz.title) 
    console.log(quizzNames);
    let userQuizz = JSON.parse(sessionStorage.getItem("loggedUser")).quizzesDone;
    userQuizz = quizzNames
    for (let user of users) {
      if (user.username == User.getUserLogged().username) {
        user.quizzesDone = quizzNames
        user.experience += 100
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser))
        User.refresh(user);
        Timeout();
      }
    }
    
  }else{
    btn3.style.backgroundColor = 'red';
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    Timeout();
    
  }
})

btn4.addEventListener('click', function() {
  const quizz = Quizz.getCurrentQuizz();
  
  if (btn4.innerHTML === quizz.correctAnswer) {
    btn4.style.backgroundColor = 'green';
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;

    User.getUserLogged().quizzesDone 
    const quizzNames = Object.values(User.getUserLogged().quizzesDone);

    quizzNames.push(quizz.title) 
    let userQuizz = JSON.parse(sessionStorage.getItem("loggedUser")).quizzesDone;
    userQuizz = quizzNames
    for (let user of users) {
      if (user.username == User.getUserLogged().username) {
        user.quizzesDone = quizzNames
        user.experience += 100
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser))
        User.refresh(user);
        Timeout();
      }
    }
    
  }else{
    btn4.style.backgroundColor = 'red';
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    Timeout();
    
  }
})

function Timeout() {
  setTimeout(() => {
    document.querySelector('#btnQuizzModal').disabled = true;
    location.reload();
    
  }, 1000);

  
}