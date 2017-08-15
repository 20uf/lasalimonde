import Home from './components/Home.vue';
import Bedrooms from './components/Bedrooms/index.vue';
import Gallery from './components/Gallery/index.vue'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/la-chambre-dhôtes', component: Bedrooms, name: 'bedrooms' },
    { path: '/Gallerie', component: Gallery, name: 'gallery' }
];
