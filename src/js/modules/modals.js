export const modals = () => {
    const openModal = (openTrigger) => {
        openTrigger.style.display ="block";
        document.body.classList.add('modal-open');
    };

    const closeModal = (closeTrigger) => {
        closeTrigger.style.display ="none";
        document.body.classList.remove('modal-open');
    };

    const bindModal = ({ triggersSelector, modalSelector, closeSelector }) => {
        const triggers = document.querySelectorAll(triggersSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
              
        triggers.forEach(trigger => {
            trigger.addEventListener('click', e => {
                if (e.target) { 
                    e.preventDefault(); 
                }
                openModal(modal);
            });
    
        });

        close.addEventListener('click', () => closeModal(modal));

        modal.addEventListener('click', (e) => {
            if (e.target === modal) { 
                closeModal(modal); 
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') { 
                closeModal(modal); 
            }
        });
    };

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            openModal(document.querySelector(selector)); 
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
    showModalByTime('.popup', 60000);
};