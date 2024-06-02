import loadHeader from "../pages/header";
import home from "../pages/home";

const firstLoad = function() {
        const content = document.querySelector("#content");
        const header = loadHeader();
        console.log(header)
        content.appendChild(header);
        home();
}

export default firstLoad;
