export const changeCalcData = (calcData) => {
    const windowShapes = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowWarmth = document.querySelectorAll('.checkbox');

    const numbersOnly = (selector) => {
        const numInputs = document.querySelectorAll(selector);
        numInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/, '');
            });
        });
    };

    numbersOnly('#width');
    numbersOnly('#height');

    const fillState = ({event, input, property}) => {
        input.forEach((field, i) => {
            field.addEventListener(event, () => {
                switch(field.nodeName) {
                    case 'SPAN' :
                        calcData[property] = i;
                        break;
                    case 'INPUT' :
                        if (field.getAttribute('type') === 'checkbox') {
                            calcData[property] = i === 0 ? "cold" : "warm";
                        } else {
                            calcData[property] = field.value;
                        }
                        break;
                    case 'SELECT' :
                        calcData[property] = field.value;
                        break;
                }
            });
        });
    };

    fillState({ event: 'click', input: windowShapes, property: 'form' });
    fillState({ event: 'input', input: windowHeight, property: 'height' });
    fillState({ event: 'input', input: windowWidth, property: 'width' });
    fillState({ event: 'change', input: windowType, property: 'type' });
    fillState({ event: 'change', input: windowWarmth, property: 'warmth' });
};