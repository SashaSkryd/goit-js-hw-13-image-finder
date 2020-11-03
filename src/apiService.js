
const KEY = '18953015-07ab6e07958b18192a80798da';
const URL = 'https://pixabay.com/api/?&key='+ KEY;

function getUrl (search, pages){

    return `${URL}&image_type=photo&orientation=horizontal&q=${search}&page=${pages}&per_page=12`
}

export default function fetchGallery (search, pages){

    return fetch(getUrl(search, pages))
     .then(res => res.json())
     .then(({hits}) => {
        return hits
    })
     .catch(error => console.log(error))
 }
 