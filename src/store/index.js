import Vue from "vue";
import Vuex from "vuex";
import { getMovies } from "../services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    notifiedMessage: ''
  },
  getters: {
    getMovie: (state) => (id) => {
        return state.movies.find(e => e.imdbID === id)
    }
  },
  mutations: {
    SET_MOVIES (state, movies) {
        state.movies = movies
    },
    SET_NOTIFY (state, message) {
        state.notifiedMessage = message
    }
  },
  actions: {
    async getMovies ({ commit }, payload) {
        try {
            const data = await getMovies(payload);
            if (!data.err) {
                const movies = data.Search;
                commit('SET_MOVIES', movies);
                return movies;
            } else {
                commit('SET_NOTIFY', data.err.Error);
            }
        } catch (err) {
            console.log(err);
        }
    },

    resetNotify ({ commit }, message) {
        commit('SET_NOTIFY', message);
    }
  }
});
