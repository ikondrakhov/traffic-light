import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'
import Vue from 'vue'
import { greenColor, down } from '../constants'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        green: greenColor,
        timeLeft: 15,
        direction: down,
        previousRoute: '/'
    },
    mutations: {
        setTimeLeft(state, payload)
        {
            state.timeLeft = payload;
        },
        setDirection(state, payload)
        {
            state.direction = payload;
        },
        setPreviousRoute(state, payload)
        {
            state.previousRoute = payload;
        }
    },
    plugins: [createPersistedState()]
})