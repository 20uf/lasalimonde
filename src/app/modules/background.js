import stocks from '../../data/background';

const state = {
    images: []
};

const mutations = {
    'SET_BACKGROUNDS' (state, images) {
        state.images = images;
    }
};

const actions = {
    initBedrooms: ({commit}) => {
        commit('SET_BACKGROUNDS', images);
    }
};

const getters = {
    bedrooms: state => {
        return state.images;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
