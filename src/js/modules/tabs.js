export const tabs = ({ 
    headerSelector, 
    tabSelector, 
    contentSelector, 
    activeClass 
}) => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        content.forEach(tabContent => {
            tabContent.style.display = 'none';
        });
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    };
    const showTabContent = (i = 0) => {
        content[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', e => {
        if (e.target &&
            (e.target.classList.contains(tabSelector.replace(/\./, "")) || 
            e.target.parentNode.classList.contains(
                tabSelector.replace(/\./, "")
            ))) {
            tabs.forEach((item, i) => {
                if (e.target == item || e.target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};