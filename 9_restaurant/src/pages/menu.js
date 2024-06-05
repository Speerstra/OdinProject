
function loadMenu() {
        const content = document.getElementById("content");
        const menu = createMenu();
        content.appendChild(menu);
};
      
function createMenu() {
        const menu = document.createElement("div");
        menu.classList.add("menu");
      
        menu.appendChild(
                createMenuItem(
                        "Oysters",
                        "Freshly harvested, right from the sea",
                        `../src/assets/img/oysters.jpg`
                )
        );

        menu.appendChild(
                createMenuItem(
                        "Tacos",
                        "A delicious treat",
                        `../src/assets/img/tacos.jpg`
                )
        );

        menu.appendChild(
                createMenuItem(
                        "Salmon on toast",
                        "Also very delicious",
                        `../src/assets/img/salmon.jpg`
                )
        );

        menu.appendChild(
                createMenuItem(
                        "Fries",
                        "The perfect appetizer",
                        `../src/assets/img/fries.jpg`
                )
        );

        return menu;
}

function createMenuItem(title, description, image) {
        
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        
        const menuTitle = document.createElement("h2");
        menuTitle.textContent = title;
        menuTitle.classList.add("menu-title");
        
        const menuDescription = document.createElement("p");
        menuDescription.textContent = description;
        menuDescription.classList.add("menu-description");
        
        const menuImage = document.createElement("img");
        menuImage.src = image
        menuImage.alt = `${title}`;
        menuImage.classList.add('menu-image')
        
        menuItem.appendChild(menuImage);
        menuItem.appendChild(menuTitle);
        menuItem.appendChild(menuDescription);
        
        return menuItem;
}

export default loadMenu;