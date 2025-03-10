// about.js

import locImg from "../images/blue-pin-in-showing-location-on-white-map-vector.jpg";

class About {

    aboutTemplate = "<h2>Our Address</h2><p>123 Foodie Street, Gourmet City, FL 56789</p><h2>Opening Hours</h2><p>Monday - Friday: 11:00 AM - 10:00 PM</p><p>Saturday - Sunday: 9:00 AM - 11:00 PM</p><h2>Contact Us</h2><p>📞 (123) 456-7890</p><p>✉️ contact@justinlee.com</p>";

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
        this.content.setAttribute('class', 'location');
        this.aboutBox.setAttribute('class', 'about-box');
        this.contentBox.setAttribute('class', 'content-box');
        this.title.setAttribute('class', 'title');
        this.subtitle.setAttribute('class', 'subtitle');
        this.aboutContent.setAttribute('class', 'about-content');
        this.reserveNow.setAttribute('class', 'reserve-now');
        this.img.setAttribute('src', locImg);

        this.title.innerHTML = "Visit Us";
        this.subtitle.innerHTML = "Come and enjoy our delicious cuisine at Justinlee!";
        this.aboutContent.innerHTML = this.aboutTemplate;
        this.reserveNow.innerHTML = "DIRECTION";

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