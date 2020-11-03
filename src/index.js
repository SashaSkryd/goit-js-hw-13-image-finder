import templatePages from './tamplate/tamplatePages.hbs';
import fetchGallery from './apiService.js';
import './styles.css';

const refs ={

    list: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form'),
    submitBtn: document.querySelector('.submitForm'),
    loadBtn: document.querySelector('.LoadMore')
}

let inputValue = '';
let pages = 1 ;

refs.searchForm.addEventListener('submit', submitHandler)

function submitHandler (event){

    event.preventDefault()
    const form = event.currentTarget
    inputValue = form.elements.query.value 
    pages = 1
    refs.list.innerHTML = ''
    fetchGallery(inputValue, pages)
    .then((res) => {
        updateGallery(res);
    })
    refs.loadBtn.classList.remove('is-hiden')
}

function updateGallery (photo){
    
    const markup = templatePages(photo);
    pages++;
    refs.list.insertAdjacentHTML("beforeend", markup);
}

refs.loadBtn.addEventListener('click', loadMoreHendler)

function loadMoreHendler (){

    fetchGallery(inputValue, pages)
    .then((res) => {
        updateGallery(res);
    })
    window.scrollTo({
    top: refs.loadBtn.offsetTop - 807,
    behavior: 'smooth'
    });
}
