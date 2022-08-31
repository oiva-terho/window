export const zoomImage = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup', 'works-big');
    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};