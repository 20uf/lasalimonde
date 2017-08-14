import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import BedAndBreakfast from './components/BedAndBreakfast/index.vue';
import Gallery from './components/Gallery/index.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/la-chambre-dhôtes', component: BedAndBreakfast },
    { path: '/Gallerie', component: Gallery }
];