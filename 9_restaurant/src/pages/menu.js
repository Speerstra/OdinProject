
function loadMenu() {
        const content = document.getElementById("content");
        content.appendChild(createMenu());
};
      
function createMenu() {
        const menu = document.createElement("div");
        menu.classList.add("menu");
      
        menu.appendChild(
                createMenuItem(
                        "TomatoSoup",
                        "made of tomatoes"
                )
        );
        
        menu.appendChild(
                createMenuItem(
                        "Carrot soup",
                        "Made of carrots"
          )
        );

        return menu;
}

function createMenuItem(title, description) {
        
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        
        const menuTitle = document.createElement("h2");
        menuTitle.textContent = title;
        
        const menuDescription = document.createElement("p");
        menuDescription.textContent = description;
        
        const menuImage = document.createElement("img");
        menuImage.src = `../src/assets/img/${title.toLowerCase()}.png`;
        menuImage.alt = `${title}`;
        
        menuItem.appendChild(menuImage);
        menuItem.appendChild(menuTitle);
        menuItem.appendChild(menuDescription);
        
        return menuItem;
}

export default loadMenu;