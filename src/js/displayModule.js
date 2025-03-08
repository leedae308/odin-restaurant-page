import Home from "./home";
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
    }

    attachEvent() {
        this.HomeBtn.addEventListener("click", () => Home.init());
    }
}

export default new displayModule;