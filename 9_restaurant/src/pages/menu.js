
function loadMenu() {
        const content = document.getElementById("content");
        const menu = createMenu();
        content.appendChild(menu);
};
      
function createMenu() {
        const menu = document.createElement("div");
        menu.classList.add("menu");
        
        const menuTitle = document.createElement('h1')
        menuTitle.innerText = 'Menu'
        menu.appendChild(menuTitle)

        menu.appendChild(
                createMenuItem(
                        "Oysters",
                        "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                        `../src/assets/img/oysters.jpg`
                )
        );

        menu.appendChild(
                createMenuItem(
                        "Tacos",
                        "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. ",
                        `../src/assets/img/tacos.jpg`
                )
        );

        menu.appendChild(
                createMenuItem(
                        "Salmon on toast",
                        "Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. ",
                        `../src/assets/img/salmon.jpg`
                )
        );

        menu.appendChild(
                createMenuItem(
                        "Fries",
                        "Nam nulla quam gravida non commodo a sodales sit amet nisi.",
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

        const menuText = document.createElement("div");
        menuText.appendChild(menuTitle)
        menuText.appendChild(menuDescription)
        menuText.classList.add('menu-text')
        
        menuItem.appendChild(menuImage);
        menuItem.appendChild(menuText);

        return menuItem;
}

export default loadMenu;