import Vue from "vue";
import Vuex from "vuex";
import { getMovies } from "../services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: []
  },
  getters: {
    getMovie: (state) => (id) => {
        return state.movies.find(e => e.imdbID === id)
    }
  },
  mutations: {
    SET_MOVIES (state, movies) {
        state.movies = movies
    }
  },
  actions: {
    async getMovies ({ commit }, payload) {
        try {
            const data = await getMovies(payload);
            const movies = data.Search;
            commit('SET_MOVIES', movies);
            return movies;
        } catch (err) {
            console.log(err);
        }
    }
  }
});
