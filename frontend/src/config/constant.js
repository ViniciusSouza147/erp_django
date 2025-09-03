// Em Vite, as envs vêm de import.meta.env e devem ter prefixo VITE_
// No Docker/CI, já passamos/geramos VITE_API_BASE no build.

const BACKEND_SERVER = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

export const BASENAME = ''; // sem barra no fim
export const BASE_URL = '/app/dashboard/default';
export const BASE_TITLE = ' | LOS ERP ';
export const API_SERVER = BACKEND_SERVER;

export const CONFIG = {
    layout: 'vertical', // disable on free version
    subLayout: '', // disable on free version
    collapseMenu: false, // mini-menu
    layoutType: 'menu-dark', // disable on free version
    navIconColor: false, // disable on free version
    headerBackColor: 'header-default', // disable on free version
    navBackColor: 'navbar-default', // disable on free version
    navBrandColor: 'brand-default', // disable on free version
    navBackImage: false, // disable on free version
    rtlLayout: false, // disable on free version
    navFixedLayout: true, // disable on free version
    headerFixedLayout: false, // disable on free version
    boxLayout: false, // disable on free version
    navDropdownIcon: 'style1', // disable on free version
    navListIcon: 'style1', // disable on free version
    navActiveListColor: 'active-default', // disable on free version
    navListTitleColor: 'title-default', // disable on free version
    navListTitleHide: false, // disable on free version
    configBlock: true, // disable on free version
    layout6Background: 'linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)', // disable on free version
    layout6BackSize: '' // disable on free version
};
