document.getElementById('addCat').addEventListener('click', getRandomCatImage);    
document.getElementById('removeCat').addEventListener('click', removeCat);

async function getRandomCatImage() {
    const catImageContainer = document.getElementById('catImageContainer');

    const api_url = 'https://api.thecatapi.com/v1/images/search?limit=0';
    const api_key = 'live_onotpUqE5jcTG89VOyTrfv7btEyDQa13sU0EoW7P0kEHkGjmSiDTOQPEVRLgK5RR';

    try {
        const response = await fetch(api_url + '&api_key=' + api_key);
        if (!response.ok) {
            throw new Error('Response was not ok');
        }

        const data = await response.json();

        const catImage = document.createElement('img');
        catImage.src = data[0].url;
        catImage.height = 200;
        catImage.onload = () => {
            catImageContainer.appendChild(catImage);
        };
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

function removeCat() {
    const catImageContainer = document.getElementById('catImageContainer');
    const catImage = catImageContainer.querySelector('img');
    if (catImage) {
        catImageContainer.removeChild(catImage);
    }
}