
const loadHome = function(){
        const content = document.querySelector('#content');
    
        const home = document.createElement("div");
        home.innerText = "Welcome to this restaurant";
        home.id = 'home'
        content.appendChild(home);

};    

export default loadHome;

