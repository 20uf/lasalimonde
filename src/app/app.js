import Vue from 'vue';
import Vuex from 'vuex';

import background from './modules/background';
import bedrooms from './modules/bedrooms';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        background,
        bedrooms
    }
});
