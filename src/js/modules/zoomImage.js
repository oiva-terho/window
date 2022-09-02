import { openModal } from "./modals";

export const zoomImage = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup', 'works-big');
    workSection.append(imgPopup);
    imgPopup.append(bigImg);

    const closeBigImg = () => {
        imgPopup.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '';
    };

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')) {
            openModal(imgPopup, 'flex');
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if (e.target && e.target.matches('div.popup')) {
            closeBigImg(); 
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') { 
            closeBigImg(); 
        }
    });
};