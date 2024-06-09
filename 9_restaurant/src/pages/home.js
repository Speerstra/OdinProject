
const loadHome = function(){
        
        const leftDiv = document.createElement("div");
        leftDiv.id="left-div";

        const restaurantName = document.createElement('h2');
        restaurantName.textContent = "Sea Side";
        restaurantName.id = 'restaurant-name'
        leftDiv.appendChild(restaurantName);

        const navButtonContainer = document.createElement('nav');
        navButtonContainer.id = 'nav-button-container'

        const homeButton = document.createElement("button");
        homeButton.innerText = 'Home'
        homeButton.id = 'homeBtn'
        homeButton.classList.add('nav-button')
        navButtonContainer.appendChild(homeButton);

        const menuButton = document.createElement("button");
        menuButton.innerText = 'Menu'
        menuButton.id = 'menuBtn'
        menuButton.classList.add('nav-button')
        navButtonContainer.appendChild(menuButton);

        const aboutButton = document.createElement("button");
        aboutButton.innerText = 'About'
        aboutButton.id = 'aboutBtn'
        aboutButton.classList.add('nav-button')
        navButtonContainer.appendChild(aboutButton);

        leftDiv.appendChild(navButtonContainer)

        const footer = document.createElement("div");
        footer.innerText = 'Images from Unsplash'
        footer.id = 'footer'
        leftDiv.appendChild(footer)

        return leftDiv;
};    

export default loadHome;