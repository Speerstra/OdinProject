
const loadNav = function(){
        const nav = document.createElement("div");
        nav.id="nav";

        const welcome = document.createElement('h2');
        welcome.textContent = "Sea Side";
        welcome.id = 'welcome'
        nav.appendChild(welcome);

        const homeButton = document.createElement("button");
        homeButton.innerText = 'Home'
        homeButton.id = 'homeBtn'
        homeButton.classList.add('nav-button')
        nav.appendChild(homeButton);

        const menuButton = document.createElement("button");
        menuButton.innerText = 'Menu'
        menuButton.id = 'menuBtn'
        menuButton.classList.add('nav-button')
        nav.appendChild(menuButton);

        const aboutButton = document.createElement("button");
        aboutButton.innerText = 'About'
        aboutButton.id = 'aboutBtn'
        aboutButton.classList.add('nav-button')
        nav.appendChild(aboutButton);

        return nav;
};    

export default loadNav;