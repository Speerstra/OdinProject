
const HEIGHT = 32;
const WIDTH = 32;

const mainDiv = document.querySelector('.main')

function generateChoiceButtons()
	{
                for(var i=0; i<WIDTH; i++)
                {
                        for (var j=0; j<HEIGHT; j++) {
                                var btn = document.createElement("BUTTON");
                                btn.setAttribute('class', 'cell');
                                btn.setAttribute('id', `${i}, ${j}`);
                                btn.innerText = i;
                                // btn.addEventListener('click', (e) => game(e));
                                mainDiv.appendChild(btn);
                        }

    	        }
        };

generateChoiceButtons()