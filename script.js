/*****************************************
*
*              ChillSeverus
*
*         (Entertainment Media)
*
*          by Akshy Chaudhary
*
******************************************/

let queryResults = document.querySelector('#queryResults');

let searchBtn = document.querySelector('.searchBtn');

let userText = document.querySelector('#userText');

let searchedText = userText.value;

searchBtn.addEventListener('click', () => {
    console.log(`${searchedText}`);
});

