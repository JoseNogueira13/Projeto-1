initdata();

function initdata() {
    if(!localStorage.recipes) {
        const recipes = [
            {
                image: "https://www.teleculinaria.pt/wp-content/uploads/2015/04/7MGeiww.jpg",
                title: "Rissois de Camarão",
                description: "Delicious deepfried seafood pastries!",
                recipeWritten: "step1",
                recipeVideo: "./media/EuropeEntree1.mp4",
                type: "entree",
                regionID: "europe"
        
            },
            {
                image: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000",
                title: "Rissois de Carne",
                description: "Delicious deepfried seafood pastries!",
                recipeWritten: "step1",
                recipeVideo: "./media/EuropeEntree1.mp4",
                type: "dessert",
                regionID: "asia"
        
            },
            {
                image: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000",
                title: "Rissois de Carne",
                description: "Delicious deepfried seafood pastries!",
                recipeWritten: "step1",
                recipeVideo: "./media/EuropeEntree1.mp4",
                type: "main",
                regionID: "asia"
        
            },
        ];
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }
}


if (!localStorage.users) {
    const users = [
        {
            username: "admin",
            password: "admin",
            email: "admin@example.com",
            profileType: "admin",
            experience: 0,
            badges: [],
            saved: [],
            avatar: "https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",
            quizzesDone: [],
        },
        

    ]    
    localStorage.setItem("users", JSON.stringify(users));
}



if (!localStorage.regions) {
    const regions = [
        {
            title: "asia",
            image: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sia.jpg",

        },
        {
            title: "africa",
            image: "https://www.segurospromo.com.br/blog/wp-content/uploads/2019/04/viagem-africa-quando-ir.jpg",
        },
        {
            title: "europe",
            image: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/1-paises-da-europa.jpg",

        },
        /*{
            title: "Oceania",
            image: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sia.jpg",
            color: "blue",
        },*/
    ]    
    localStorage.setItem("regions", JSON.stringify(regions));
}

if (!localStorage.quizzes) {
    const quizzes = [
      {
          title: "Rissois de Camarão",
          question : "Qual é a resposta?",
          answer1 : "1",
          answer2 : "2",
          answer3 : "3",
          answer4 : "4",
          correctAnswer : "3",
          quizzID : "0",
      },
      {  
        title: "Rissois de Carne",
        question : "Qual é a resposta?",
        answer1 : "5",
        answer2 : "6",
        answer3 : "7",
        answer4 : "8",
        correctAnswer : "6",
        quizzID : "1",
    },
    {  
        title: "Rissois de Carne",
        question : "Qual é a resposta?",
        answer1 : "9",
        answer2 : "10",
        answer3 : "11",
        answer4 : "12",
        correctAnswer : "12",
        quizzID : "2",
    },
    ];
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    
  }