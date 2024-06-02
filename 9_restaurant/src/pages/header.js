const loadHeader = function(){
        const header = document.createElement("div");
        header.id="header";
    
        const logo = document.createElement("div");
        logo.innerText = "RT";
        header.appendChild(logo);

        const homeButton = document.createElement("button");
        homeButton.innerText = 'Home'
        homeButton.id = 'homeBtn'
        header.appendChild(homeButton);

        const menuButton = document.createElement("button");
        menuButton.innerText = 'Menu'
        menuButton.id = 'menuBtn'
        header.appendChild(menuButton);

        const aboutButton = document.createElement("button");
        aboutButton.innerText = 'About'
        aboutButton.id = 'aboutBtn'
        header.appendChild(aboutButton);


        return header;
};    

export default loadHeader;