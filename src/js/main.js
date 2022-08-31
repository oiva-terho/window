import "./slider";
import { modals, tabs, forms, changeCalcData } from "./modules";

'use strict';

const calcData = { form: 0, type: 'wood' };

changeCalcData(calcData);
modals();
forms(calcData);
tabs({
    headerSelector: '.glazing_slider ', 
    tabSelector: '.glazing_block', 
    contentSelector: '.glazing_content', 
    activeClass: 'active'
});
tabs({
    headerSelector: '.decoration_slider', 
    tabSelector: '.no_click', 
    contentSelector: '.decoration_content > div > div', 
    activeClass: 'after_click'
});
tabs({
    headerSelector: '.balcon_icons',
    tabSelector: '.balcon_icons_img', 
    contentSelector: '.big_img > img', 
    activeClass: 'do_image_more',
    display: 'inline'
});