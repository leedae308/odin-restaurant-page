import Home from "./home";
import Menu from "./menu";
import About from "./about";
import Location from "./location";
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
        this.AboutBtn = document.querySelector('#about-btn');
        this.LocationBtn = document.querySelector('#location-btn');
    }

    attachEvent() {
        this.HomeBtn.removeEventListener("click", this.loadHome);
        this.MenuBtn.removeEventListener("click", this.loadMenu);
        this.AboutBtn.removeEventListener("click", this.loadAbout);
        this.LocationBtn.removeEventListener("click", this.loadLocation);

        this.loadHome = () => Home.init();
        this.loadMenu = () => Menu.init();
        this.loadAbout = () => About.init();
        this.loadLocation = () => Location.init();

        this.HomeBtn.addEventListener("click", this.loadHome);
        this.MenuBtn.addEventListener("click", this.loadMenu);
        this.AboutBtn.addEventListener("click", this.loadAbout);
        this.LocationBtn.addEventListener("click", this.loadLocation);
    }
}

export default new displayModule;