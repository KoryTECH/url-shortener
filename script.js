'use strict'
const shortenBtn = document.querySelector(".btn-shorten");

const display = document.querySelector(".display");
shortenBtn.addEventListener("click", function(){
    const url = document.querySelector(".shortener-input").value;
    if(!url) {
        display.innerHTML = `<p>Please enter a link</p>`;
    }
    else {
        fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => { 
            console.log(data)
            display.innerHTML = `<p class="url-display"> <a href=${data.shorturl}>${data.shorturl}</a></p>`
        })
        .catch(error => console.error('Error:', error));
    }
})