
const home = function(){
        const content = document.querySelector('#content');
    
        const welcome = document.createElement("div");
        welcome.innerText = "Welcome to this restaurant";
        content.appendChild(welcome);

        const menu = document.createElement("div");
        menu.innerText = "Bread, salmon, and mussles";
        content.appendChild(menu);
};    

export default home;

