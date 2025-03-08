class HomeDOM {

    init() {
        this.cacheDOM();
        this.content.innerHTML="";
        this.subTitle();
        this.Title();
        this.Description();
        this.checkMenuButton();
    }

    cacheDOM() {
        this.content = document.querySelector('#content');
        this.subtitle = document.createElement('div');
        this.title = document.createElement('div');
        this.description = document.createElement('div');
        this.menuButton = document.createElement('div');
    }

    subTitle() {
        this.subtitle.classList.add('subtitle');
        this.subtitle.innerHTML = "Are You Hungry?";
        this.content.appendChild(this.subtitle);
    }

    Title() {
        this.title.classList.add('title');
        this.title.innerHTML = "Don't Wait!";
        this.content.appendChild(this.title);
    }

    Description() {
        this.description.classList.add('description');
        this.description.innerHTML = "Let's start to order food now";
        this.content.appendChild(this.description);
    }

    checkMenuButton() {
        this.menuButton.classList.add('check-menu-button');
        this.menuButton.innerHTML = "Check out Menu";
        this.content.appendChild(this.menuButton);
    }
}

// Export an instance so it can be used directly
export default new HomeDOM();