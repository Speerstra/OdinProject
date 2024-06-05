
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

import '../styles/home.css'
import '../styles/menu.css'
import '../styles/about.css'
import '../styles/header.css'

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
        loadMenu();
});

aboutBtn.addEventListener('click', function() {
        clearPage();
        loadAbout();
});
