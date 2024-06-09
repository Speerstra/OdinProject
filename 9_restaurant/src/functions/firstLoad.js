import loadHome from "../pages/home";

const firstLoad = function() {
        const background = document.createElement('div');
        background.id = "background";
        document.body.appendChild(background);

        const content = document.createElement('div');
        content.id = "content";
        document.body.appendChild(content);

        const home = loadHome();
        content.appendChild(home);
}

export default firstLoad;
