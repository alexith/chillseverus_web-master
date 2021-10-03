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

let userText = document.querySelector('#userText').value;

let e;

if (e = 'click') {
searchBtn.addEventListener(e, () => {
    console.log(`${userText}`);
});
} else {
    console.log('please search and click')
}
