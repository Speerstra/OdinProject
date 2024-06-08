import loadNav from "../pages/header";
import loadHome from "../pages/home";

const firstLoad = function() {
        const content = document.querySelector("#content");
        const nav = loadNav();
        content.appendChild(nav);
        loadHome();
}

export default firstLoad;
