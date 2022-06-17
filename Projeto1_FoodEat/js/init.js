initdata();

function initdata() {
    if(!localStorage.recipes) {
        const recipes = [
            {
                image: "./media/EuropeEntree1.png",
                title: "Rissois de Camarão",
                description: "Delicious deepfried seafood pastries!",
                recipeWritten: "step1",
                recipeVideo: "./media/EuropeEntree1.mp4",
                type: "entree",
                regionID: "asia"
        
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
            experience: "0",
            badges: [],
            saved: [],
            profileType: "admin",
            avatar: "",
        }
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
            image: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sia.jpg",
        },
        {
            title: "europe",
            image: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sia.jpg",

        },
        /*{
            title: "Oceania",
            image: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/sia.jpg",
            color: "blue",
        },*/
    ]    
    localStorage.setItem("regions", JSON.stringify(regions));
}