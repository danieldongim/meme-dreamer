const deck = document.querySelector("#deck");
const form = document.querySelector("#form");
const memeURL = form.querySelector("#url");
const topText = form.querySelector("#toptext");
const botText = form.querySelector("#bottext");

document.addEventListener('DOMContentLoaded', load); 

function load() {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        //make container div
        var container = document.createElement('div');
        container.classList.add('container');
        deck.appendChild(container);

        //make meme Image from URL
        var meme = document.createElement('img'); 
        meme.src = memeURL.value;
        meme.classList.add('images');
        container.appendChild(meme);

        //topcaption
        if (topText) {
            var topCaption = document.createElement('span');
            topCaption.textContent = topText.value; 
            topCaption.classList.add('top-text');
            container.appendChild(topCaption);
        }

        //botcaption
        if (botText) {
            var botCaption = document.createElement('span');
            botCaption.textContent = botText.value;
            botCaption.classList.add('bot-text');
            container.appendChild(botCaption);
        }

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE!';
        deleteButton.classList.add('delete');
        container.appendChild(deleteButton);
        deleteButton.addEventListener('click', function() {
            deck.removeChild(container);
        });

        form.reset(); 
    });
}

