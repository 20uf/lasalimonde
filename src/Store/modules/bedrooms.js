import stocks from '../../data/bedrooms';

const state = {
    bedrooms: []
};

const mutations = {
    'SET_ROOMS' (state, bedrooms) {
        state.bedrooms = bedrooms;
    }
};

const actions = {
    initBedrooms: ({commit}) => {
        commit('SET_ROOMS', bedrooms);
    }
};

const getters = {
    bedrooms: state => {
        return state.bedrooms;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
