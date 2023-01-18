const controls = document.querySelector('.controls');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

controls.addEventListener('click', onModalBtnClick);

function onModalBtnClick({ target }){
  
    if(target.tagName !== 'BUTTON'){
        return;
    }

    const modalType = target.dataset.modalType;
    fillModalInfo(modalType);
    toggleModal();

   
    window.addEventListener('click', onModalClose);
    window.addEventListener('keydown', onKeyClick);
}

function fillModalInfo(modalType){

    modal.style.backgroundColor = modalType;
    modal.lastElementChild.textContent = `${modalType[0].toUpperCase()}${modalType.slice(1)}`;
    // modal.insertAdjacentHTML('beforeend', '<p style="font-size: 10px;">Hello from HTML inside modal</p>')
}

function onKeyClick(event){

    if(event.code !== 'Escape'){
        return;
    }

    toggleModal();
    clearBackdropListeners();
}

const CLOSABLE_ELEMENTS = ['backdrop', 'modal-close', 'title'];


function isValidCloseClick(target){
    // return !target.classList.contains('backdrop') && !target.classList.contains('modal-close')
    return CLOSABLE_ELEMENTS.some(elemCalss => target.classList.contains(elemCalss));
}

function onModalClose({ target }){


    if(!isValidCloseClick(target)){
        return;
    }

    toggleModal();
    clearBackdropListeners();
}

function clearBackdropListeners(){

    window.removeEventListener('keydown', onKeyClick);
    window.removeEventListener('click', onModalClose);
}

function toggleModal(){

    modal.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
}


