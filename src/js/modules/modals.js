export const modals = () => {
    const modalWindows = document.querySelectorAll('[data-modal]');

    const calcScrollBarWidth = () => {
        const testDiv = document.createElement('div');
        testDiv.style.width = '100px';
        testDiv.style.overflowY = 'scroll';
        document.body.appendChild(testDiv);

        const scrollWidth = testDiv.offsetWidth - testDiv.clientWidth;
        testDiv.remove();
        return scrollWidth;
    };

    const scrollWidth = calcScrollBarWidth();

    const openModal = (openTrigger) => {
        openTrigger.style.display ="block";
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scrollWidth}px`;
    };

    const closeModal = () => {
        modalWindows.forEach(window => window.style.display ="none");
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = '';
    };

    const bindModal = ({ 
        triggersSelector, 
        modalSelector, 
        closeSelector, 
        closeClickOverlay = true 
    }) => {
        const triggers = document.querySelectorAll(triggersSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
                
        triggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
                if (e.target) { 
                    e.preventDefault(); 
                }

                modalWindows.forEach(window => window.style.display ="none");
                openModal(modal);
            });
    
        });

        close.addEventListener('click', () => closeModal());

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) { 
                closeModal(); 
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') { 
                closeModal(); 
            }
        });
    };

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            let modalIsOpened;
            modalWindows.forEach(window => {
                if (getComputedStyle(window).display !== 'none') {
                    modalIsOpened = true;
                }
            });
            if (!modalIsOpened) { 
                openModal(document.querySelector(selector)); 
            } 
        }, time);
    };

    bindModal({
        triggersSelector: '.popup_engineer_btn', 
        modalSelector: '.popup_engineer', 
        closeSelector: '.popup_engineer .popup_close'
    });
    bindModal({
        triggersSelector: '.phone_link', 
        modalSelector: '.popup', 
        closeSelector: '.popup .popup_close'
    });
    bindModal({
        triggersSelector: '.popup_calc_btn', 
        modalSelector: '.popup_calc', 
        closeSelector: '.popup_calc_close'
    });
    bindModal({
        triggersSelector: '.popup_calc_button', 
        modalSelector: '.popup_calc_profile', 
        closeSelector: '.popup_calc_profile_close',
        closeClickOverlay: false
    });
    bindModal({
        triggersSelector: '.popup_calc_profile_button', 
        modalSelector: '.popup_calc_end', 
        closeSelector: '.popup_calc_end_close',
        closeClickOverlay: false
    });
    showModalByTime('#popup', 60000);
};