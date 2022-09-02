import "./slider";
import { modals, tabs, forms, changeCalcData, countdown, zoomImage } from "./modules";

'use strict';

const calcData = { form: 0, type: 'wood' };

changeCalcData(calcData);
try { modals(); } catch { console.log('Modals are broken'); }
try { forms(calcData); } catch { console.log('Forms are broken'); }
try { 
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
 } catch { console.log('Tabs are broken'); }
try { zoomImage(); } catch { console.log('Zoom image is broken'); }
try { countdown('#timer', '2022-12-18'); } catch { console.log('Countdown is broken'); }