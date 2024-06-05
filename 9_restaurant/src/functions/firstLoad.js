import loadHeader from "../pages/header";
import loadHome from "../pages/home";

const firstLoad = function() {
        const content = document.querySelector("#content");
        const header = loadHeader();
        content.appendChild(header);
        loadHome();
}

export default firstLoad;
