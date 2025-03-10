// about.js

import steakImg from '../images/steak.jpg';

class About {

    aboutTemplate = "'Tis the season to be hungry! Gather around our table at Justinlee and you'll be in for a holiday treat with the festive cousine Chef Daehee Lee and his team have designed.";

    init() {
        this.cacheDOM();
        this.content.innerHTML = "";
        this.createDOM();
        this.addEventHandler();

    }

    cacheDOM() {
        this.content = document.querySelector('#content');
        this.aboutBox = document.createElement("div");
        this.img = document.createElement('img');
        this.contentBox = document.createElement('div');
        this.title = document.createElement('div');
        this.subtitle = document.createElement('div');
        this.aboutContent = document.createElement('div');
        this.reserveNow = document.createElement('div');
    }

    createDOM() {
        this.content.setAttribute('class', 'about');
        this.aboutBox.setAttribute('class', 'about-box');
        this.contentBox.setAttribute('class', 'content-box');
        this.title.setAttribute('class', 'title');
        this.subtitle.setAttribute('class', 'subtitle');
        this.aboutContent.setAttribute('class', 'about-content');
        this.reserveNow.setAttribute('class', 'reserve-now');
        this.img.setAttribute('src', steakImg);

        this.title.innerHTML = "FESTIVE DINING";
        this.subtitle.innerHTML = "Celebrate the holidays at Justinlee!";
        this.aboutContent.innerHTML = this.aboutTemplate;
        this.reserveNow.innerHTML = "RESERVE NOW";

        this.contentBox.appendChild(this.title);
        this.contentBox.appendChild(this.subtitle);
        this.contentBox.appendChild(this.aboutContent);
        this.contentBox.appendChild(this.reserveNow);

        this.aboutBox.appendChild(this.img);
        this.aboutBox.appendChild(this.contentBox);

        this.content.appendChild(this.aboutBox);

    }

    addEventHandler() {

    }
}

export default new About();