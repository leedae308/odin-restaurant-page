import eggBenedictImg from '../images/egg-benedict.jpg';
import shrimpSaladImg from '../images/elegant-plate-with-fresh-appetizing-salad.jpg';
import eggSaladImg from '../images/salad-with-vitamins-body-weight-maintenance.jpg';
import tunaImg from '../images/tuna-salad.jpg';
import steakImg from '../images/steak.jpg';

class Food {
    constructor(name, img, theme, price) {
        this.name = name;
        this.img = img;
        this.theme = theme;
        this.price = price;
    }
}

class MenuDOM {
    appetizer = [];
    main = [];

    init() {
        this.cacheDOM();
        this.content.innerHTML = "";
        this.content.setAttribute('class', 'menu');
        this.createFoodList();
        this.createDOM();
    }

    cacheDOM() {
        this.content = document.querySelector('#content');
    }

    createDOM() {
        // Appetizer Section
        this.theme = document.createElement('div');
        this.theme.setAttribute('class', 'theme');

        this.themeName = document.createElement('div');
        this.themeName.setAttribute('class', 'theme-name');
        this.themeName.innerHTML = "Appetizer";

        this.themeDescription = document.createElement('div');
        this.themeDescription.setAttribute('class', 'theme-description');
        this.themeDescription.innerHTML = "SELECT YOUR ITEM";

        this.cardContainer = document.createElement('div');
        this.cardContainer.setAttribute('class', 'card-container');

        // Ensure that the appetizer section is populated correctly
        this.appetizer.forEach((food) => {
            const card = document.createElement('div');
            const img = document.createElement('img');
            const foodName = document.createElement('div');
            foodName.setAttribute('class', 'food-name');
            const buyNow = document.createElement('button');
            const price = document.createElement('div');
            price.setAttribute('class', 'price');


            price.innerHTML = food.price;
            buyNow.innerHTML = "Buy Now";
            foodName.innerHTML = food.name;
            img.setAttribute("src", food.img);
            card.setAttribute('class', "card");

            foodName.appendChild(buyNow);
            card.appendChild(img);
            card.appendChild(foodName);
            card.appendChild(price);
            this.cardContainer.appendChild(card);
        });

        this.theme.appendChild(this.themeName);
        this.theme.appendChild(this.themeDescription);
        this.theme.appendChild(this.cardContainer);

        // Main Section
        this.theme1 = document.createElement('div');
        this.theme1.setAttribute('class', 'theme');

        this.themeName1 = document.createElement('div');
        this.themeName1.setAttribute('class', 'theme-name');
        this.themeName1.innerHTML = "Main";

        this.themeDescription1 = document.createElement('div');
        this.themeDescription1.setAttribute('class', 'theme-description');
        this.themeDescription1.innerHTML = "SELECT YOUR ITEM";

        this.cardContainer1 = document.createElement('div');
        this.cardContainer1.setAttribute('class', 'card-container');

        // Ensure that the main section is populated correctly
        this.main.forEach((food) => {
            const card = document.createElement('div');
            const img = document.createElement('img');
            const foodName = document.createElement('div');
            foodName.setAttribute('class', 'food-name');
            const buyNow = document.createElement('button');
            const price = document.createElement('div');
            price.setAttribute('class', 'price');

            price.innerHTML = food.price;
            buyNow.innerHTML = "Buy Now";
            foodName.innerHTML = food.name;
            img.setAttribute("src", food.img);
            img.setAttribute("alt", "food");
            card.setAttribute('class', "card");

            foodName.appendChild(buyNow);
            card.appendChild(img);
            card.appendChild(foodName);
            card.appendChild(price);
            this.cardContainer1.appendChild(card);
        });

        this.theme1.appendChild(this.themeName1);
        this.theme1.appendChild(this.themeDescription1);
        this.theme1.appendChild(this.cardContainer1);

        // Append both theme sections to content
        this.content.appendChild(this.theme);
        this.content.appendChild(this.theme1);
    }

    createFoodList() {
        this.appetizer = [];
        this.main = [];
        
        const eggBenedict = new Food("Egg Benedict", eggBenedictImg, "appetizer", "10$");
        const shrimpSalad = new Food("Shrimp Salad", shrimpSaladImg, "appetizer", "15$");
        const eggSalad = new Food("Egg Salad", eggSaladImg, "appetizer", "8$");

        const tuna = new Food("Tuna", tunaImg, "main", "20$");
        const steak = new Food("Steak", steakImg, "main", "35$");

        this.appetizer.push(eggBenedict, shrimpSalad, eggSalad);
        this.main.push(tuna, steak);
    }
}

export default new MenuDOM();
