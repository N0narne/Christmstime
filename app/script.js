const cat_btn = document.querySelector('#cat_btn');
const cat_result = document.querySelector('#cat_result');

cat_btn.addEventListener('click', getRandomCat);

function getRandomCat(){
    const url = 'https://api.thecatapi.com/v1/images/search';

    fetch(url)
    .then(response => response.json())
    .then(data=> {
        console.log(data[0].url);
        cat_result.innerHTML = `<img src=${data[0].url} alt="cat"/>`;
    })
}