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
    initBackgrounds: ({commit}) => {
        commit('SET_BACKGROUNDS', images);
    }
};

const getters = {
    backgrounds: state => {
        return state.images;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
