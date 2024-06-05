import '../styles/header.css'
import '../styles/home.css'
import '../styles/menu.css'
import '../styles/about.css'

import home from "./home";
import menu from "./menu";
import about from "./about";

import firstLoad from "../functions/firstLoad";
import clearPage from '../functions/clearPage';

firstLoad();
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

homeBtn.addEventListener('click', function() {
        clearPage();
        loadHome();
});

menuBtn.addEventListener('click', function() {
        clearPage();
        menu();
});

aboutBtn.addEventListener('click', function() {
        clearPage();
        about();
});
