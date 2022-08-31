import { checkNumInputs } from "./inputCheck";

export const changeCalcData = (calcData) => {
    const windowShapes = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowWarmth = document.querySelectorAll('.checkbox');
    
    checkNumInputs('#width');
    checkNumInputs('#height');

    const fillState = ({event, input, property}) => {
        input.forEach((field, i) => {
            field.addEventListener(event, () => {
                switch(field.nodeName) {
                    case 'SPAN' :
                        calcData[property] = i;
                        break;
                    case 'INPUT' :
                        if (field.getAttribute('type') === 'checkbox') {
                            i === 0 ? calcData[property] = "cold" :  calcData[property] = "warm";
                            //here we should uncheck second checkbox. how can I cut it?
                            input.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
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