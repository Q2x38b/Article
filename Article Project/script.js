const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');

    setTimeout(() => {
        popupContainer.classList.add('closing');
    }, 100);
    
    popupContainer.addEventListener('transitionend', () => {
        popupContainer.classList.remove('active', 'closing');
    }, { once: true });
}
