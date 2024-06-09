import loadHome from "../pages/home";

const firstLoad = function() {
        const content = document.querySelector("#content");
        const home = loadHome();
        content.appendChild(home);
}

export default firstLoad;
