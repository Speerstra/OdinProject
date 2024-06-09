
const loadHome = function(){
        
        const homeDiv = document.createElement("div");
        homeDiv.id="home-div";

        const restaurantName = document.createElement('h2');
        restaurantName.textContent = "Sea Side";
        restaurantName.id = 'restaurant-name'
        homeDiv.appendChild(restaurantName);

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

        homeDiv.appendChild(navButtonContainer)

        const footer = document.createElement("div");
        footer.innerHTML = 'Images from <a href="https://unsplash.com/">Upsplash<a>'
        footer.id = 'footer'
        homeDiv.appendChild(footer)

        return homeDiv;
};    

export default loadHome;