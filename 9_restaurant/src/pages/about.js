
const loadAbout = function() {
        const content = document.querySelector('#content');
        const about = document.createElement('div');
        about.id = 'about';

        const aboutTitle = document.createElement('h2');
        aboutTitle.innerText = 'About'
        about.appendChild(aboutTitle)

        const aboutText = document.createElement('p');
        aboutText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at consectetur lorem donec massa sapien faucibus et. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Ipsum dolor sit amet consectetur adipiscing elit ut. \n\nIn metus vulputate eu scelerisque felis imperdiet proin fermentum. Eget gravida cum sociis natoque penatibus et magnis dis. Dictum fusce ut placerat orci nulla pellentesque. At tempor commodo ullamcorper a. Aenean sed adipiscing diam donec. Augue eget arcu dictum varius duis at consectetur lorem donec. Ornare arcu dui vivamus arcu felis. Risus commodo viverra maecenas accumsan lacus vel.\n\n'
        about.appendChild(aboutText)

        const reservantion = document.createElement('p');
        reservantion.innerText = 'Call for a reservation \n876 543 1243'
        reservantion.id = 'reservantion'
        about.appendChild(reservantion)


        // const map = document.createElement('img')
        // map.src = "../src/assets/img/map.png";
        // map.id = 'map'
        // about.appendChild(map)
        

        content.append(about)
}

export default loadAbout;