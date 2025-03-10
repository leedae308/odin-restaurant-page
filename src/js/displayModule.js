import Home from "./home";
import Menu from "./menu";
import "../css/styles.css"


class displayModule {

    init() {
        this.cacheDOM();
        Home.init();
        this.attachEvent();
    }

    cacheDOM() {
        this.content = document.querySelector('#content');
        this.HomeBtn = document.querySelector('#home-btn');
        this.MenuBtn = document.querySelector('#menu-btn');
    }

    attachEvent() {
        this.HomeBtn.removeEventListener("click", this.loadHome);
        this.MenuBtn.removeEventListener("click", this.loadMenu);

        this.loadHome = () => Home.init();
        this.loadMenu = () => Menu.init();

        this.HomeBtn.addEventListener("click", this.loadHome);
        this.MenuBtn.addEventListener("click", this.loadMenu);
    }
}

export default new displayModule;