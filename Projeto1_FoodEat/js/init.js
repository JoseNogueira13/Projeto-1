initdata();

function initdata() {
    if(!localStorage.recipes) {
        const recipes = [
            // ASIA EXAMPLES
            {
                image: "https://www.japanesecooking101.com/wp-content/uploads/2012/03/IMG_6524-1024x682.jpg",
                title: "Miso soup",
                description: "Miso Soup is soul food for Japanese people.  They can have it anytime of a day. Miso Soup is such an important part of Japanese meal.",
                recipeWritten: "Boil Dashi. Cut tofu into 1/2 cubes and add to Dashi. Reduce heat to low and dissolve miso paste in the Dashi. Take care not to boil. Add green onions and remove from heat.",
                recipeVideo: "https://www.youtube.com/embed/lH7pgsnyGrI",
                type: "entree",
                regionID: "asia"
        
            },
            {
                image: "https://www.japanesecooking101.com/wp-content/uploads/2013/06/IMG_9808-700x466.jpg",
                title: "Ramen",
                description: "Ramen is a very popular noodle soup in Japan.",
                recipeWritten: "Rub salt on pork and let it sit overnight in the fridge. In a pot, put water, ginger root, garlic, green onions and salted pork, and boil at high heat. Skim fat and other floating scums. Then cover, reduce to low heat, and simmer for 1 1/2 to 2 hours. Let the broth and pork cool completely in pot. Strain and save pork. Slice pork and set aside for a topping. Prepare the rest of the toppings now as well (boiled eggs, blanched bean sprouts, cut green onions), before making the soup and noodles. Once the noodles are cooked, you will need to add the soup and toppings right away or the noodles will get soft, so you won't have time to prepare the toppings at the end. Boil the broth and add soy sauce, sake, salt and sesame oil. Let it simmer at very low heat until noodles are ready. In boiling water in a pot, add baking soda (be careful, it may boil over), then add the fresh angel hair pasta. Cook the pasta for 30 seconds, and strain. Immediately divide noodles into bowls and add soup onto noodles. Top with boiled eggs, bean sprouts, green onions and sliced pork.",
                recipeVideo: "https://www.youtube.com/embed/EizSoy7Ztto",
                type: "main",
                regionID: "asia"
        
            },
            {
                image: "https://www.japanesecooking101.com/wp-content/uploads/2013/12/IMG_7876-700x466.jpg",
                title: "Sweet Mochi",
                description: "Mochi is Japanese sticky rice cake used both in savory and sweet dishes.",
                recipeWritten: "Mix Mochiko and water in a glass (or other heat proof) bowl and mix well. Add some more water if it's too dry, 1 Tbsp at a time. Steam the Mochiko dough (leaving the dough in the bowl) in a steamer for 20 minutes. Transfer the steamed Mochi into a pot and cook at medium to medium low heat with 1/3 of the sugar (2/3 cup). When the sugar is completely dissolved, add another 1/3 of the sugar and mix well. Add the last part of the sugar and cook some more until the sugar is dissolved. Take the time to melt the sugar, but be careful not to burn it. Take the hot Mochi out from the pot onto a sheet pan liberally dusted with cornstarch. Shape as you like.",
                recipeVideo: "https://www.youtube.com/embed/rWjdBDe9dS8",
                type: "dessert",
                regionID: "asia"
        
            },
            // AFRICA EXAMPLES
            {
                image: "https://springbokbutchery.com/wp-content/uploads/2017/03/Lamb-Sosaties.jpg",
                title: "Sosaties",
                description: "Sosaties is a local favorite during the summer.",
                recipeWritten: "Fry onions. Make marinade. Marinade lamb and refrigerate. Soak apricots. Assemble skewers. Grill skewers. Cook marinade",
                recipeVideo: "https://www.youtube.com/embed/er3GPnZys7s",
                type: "entree",
                regionID: "africa"
        
            },
            {
                image: "https://africanfood94.files.wordpress.com/2016/04/2013-04-03-r-koshari.jpg",
                title: "Koshari",
                description: "An Egyptian celebratory dish",
                recipeWritten: "Cook the lentils. Bring lentils and 4 cups of water to a boil in a medium pot or saucepan over high heat. Reduce the heat to low and cook until lentils are just tender (15-17 minutes). Drain from water and season with a little salt. (Note: when the lentils are ready, they should not be fully cooked. They should be only par-cooked and still have a bite to them as they need to finish cooking with the rice). Now, for the rice. Drain the rice from its soaking water. Combine the par-cooked lentils and the rice in the saucepan over medium-high heat with 1 tablespoon cooking oil, salt, pepper, and coriander. Cook for 3 minutes, stirring regularly. Add warm water to cover the rice and lentil mixture by about 1 ½ inches (you'll probably use about 3 cups of water here). Bring to a boil; the water should reduce a bit. Now cover and cook until all the liquid has been absorbed and both the rice and lentils are well cooked through (about 20 minutes).  Keep covered and undisturbed for 5 minutes or so. Now make the pasta. While the rice and lentils are cooking, make the pasta according to package instructions by adding the elbow pasta to boiling water with a dash of salt and a little oil. Cook until the pasta is al dente. Drain. Cover the chickpeas and warm in the microwave briefly before serving.",
                recipeVideo: "https://www.youtube.com/embed/y0d2ZMZBW4Y",
                type: "main",
                regionID: "africa"
            },
            {
                image: "https://traubenliebe.com/media/k2/items/cache/73d322d0b7fba9da3c4b4cccf26ed5eb_XL.jpg",
                title: "Om ali",
                description: "An Egyptian pudding with roots on an ancient celebration",
                recipeWritten: " In an oven proof baking dish, place your baked croissant pieces. Add any toppings you want to include over the top of the croissant pieces. Add enough milk so the pastry is just barely emerging from it. You can add more croissant pieces if necessary to get it to the right depth. Spoon over as much of the cream as you can and then top with some more brown sugar. Set your broiler to low and place the puddings beneath it. Once the cream has melted and the surface of the Om Ali has caramelized, remove it from the oven. Garnish with more nuts and serve once it is no longer a scalding temperature",
                recipeVideo: "https://www.youtube.com/embed/ymyODEXOR9Q",
                type: "dessert",
                regionID: "africa"
            },
            // EUROPE EXAMPLES
            {
                image: "https://www.cookii.pt/imagens/20022806202023.jpg",
                title: "Rissois de Camarão",
                description: "Rissois de camarão are a popular portuguese seafood pastrie",
                recipeWritten: "",
                recipeVideo: "https://www.youtube.com/embed/kqCFIpYDZi4",
                type: "entree",
                regionID: "europe"       
            },
            {
                image: "https://www.afamilyfeast.com/wp-content/uploads/2012/11/Mushroom-Risotto-3.jpg",
                title: "Mushroom risotto",
                description: "Mushroom risotto is a tradicional italian mushroom buttery rice",
                recipeWritten: "Put 50g dried porcini mushrooms into a large bowl and pour over 1 litre boiling water. Soak for 20 mins, then drain into a bowl, discarding the last few tbsp of liquid left in the bowl. Crumble 1 vegetable stock cube into the mushroom liquid, then squeeze the mushrooms gently to remove any liquid. Heat 2 tbsp olive oil in a shallow saucepan or deep frying pan over a medium flame. Add 1 finely chopped onion and 2 finely chopped garlic cloves, then fry for about 5 mins until soft. Stir in 250g chopped chestnut mushrooms and the dried mushrooms, season with salt and pepper and continue to cook for 8 mins until the fresh mushrooms have softened. Tip 300g risotto rice into the pan and cook for 1 min. Pour over a 175ml glass of white wine and let it bubble to nothing so the alcohol evaporates. Keep the pan over a medium heat and pour in a quarter of the mushroom stock. Simmer the rice, stirring often, until the rice has absorbed all the liquid. Add about the same amount of stock again and continue to simmer and stir - it should start to become creamy, plump and tender. By the time the final quarter of stock is added, the rice should be almost cooked. Continue stirring until the rice is cooked. If the rice is still undercooked, add a splash of water. Take the pan off the heat, add 25g butter and scatter over 25g grated parmesan or Grana Padano cheese and half a handful of chopped parsley leaves. Cover and leave for a few mins so that the rice can take up any excess liquid as it cools a bit. Give the risotto a final stir, spoon into bowls and scatter with the remaining 25g grated cheese and the remaining chopped parsley leaves.",
                recipeVideo: "https://www.youtube.com/embed/GYq6OLGN8JQ",
                type: "main",
                regionID: "europe"      
            },
            {
                image: "https://pastel-de-nata.pt/wp-content/uploads/2017/12/receita-de-pastel-de-nata.jpg",
                title: "Pasteis de Nata",
                description: "Pasteis de Nata are a portuguese egg tart created by nuns.",
                recipeWritten: "Pré-aqueça o forno a 240 ºC. Num tacho, coloque o leite, as cascas de limão e os paus de canela. Leve ao lume até levantar fervura e desligue. Numa taça, misture o açúcar com a farinha. Acrescente a mistura ao leite, ainda bem quente, mexendo bem com varas.  Retire as cascas de limão e os paus de canela e deixe arrefecer durante 10 minutos. Junte os ovos inteiros e as gemas. Mexa com as varas até formar um creme homogéneo. Leve ao lume novamente, mexendo sempre até engrossar. Enrole a massa folhada formando um cilindro e corte em rodelas de 3 cm cada. Com a ajuda dos polegares humedecidos, forre pequenas formas metálicas espalhando bem a massa até ao rebordo. Deite o recheio nas formas e leve ao forno durante 15 minutos, ou até dourarem. Sirva ainda quente. Sugestão: polvilhe com canela.",
                recipeVideo: "https://www.youtube.com/embed/lWLCxui1Mw8",
                type: "dessert",
                regionID: "europe"      
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
          question : "What ingredient is used in this recipe?",
          answer1 : "Camarão",
          answer2 : "Meat",
          answer3 : "Fruits",
          answer4 : "Sugar",
          correctAnswer : "Camarão",
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