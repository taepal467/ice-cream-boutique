import { homeModule } from './home';
import { menuModule } from './menu';
import { contactModule } from './contact';

homeModule();

let tabSwitchingModule = (function(){
    const homeTab = document.getElementById('home');
    homeTab.addEventListener('click', homeModule);

    const menuTab = document.getElementById('menu');
    menuTab.addEventListener('click', menuModule);

    const contactTab = document.getElementById('contact');
    contactTab.addEventListener('click', contactModule);
})();
