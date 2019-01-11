import Vuex from 'vuex';

const store = () => new Vuex.Store({
    state: {
        userData: null
    },
    mutations: {
        setUserData (state, value) {
            state.userData = value;
        }
    }
});

export default store;