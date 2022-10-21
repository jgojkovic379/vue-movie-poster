<template>
  <div id="home">
    <h1>Home page</h1>
    <div v-if="movies.length" class="main-container">
      <div class="main-container__content grid-auto-320 grid-gap-4">
        <movie-poster v-for="(movie, index) in movies" :key="index" :movie_data="movie"></movie-poster>
      </div>
    </div>
    <div v-if="loadingSpinner" class="loading-mask">
      <div class="loading-wrapper">
        <span>Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { omdb_apikey } from "../config";
import axios from "axios";
import MoviePoster from "../components/MoviePoster.vue";
export default {
  components: {
    MoviePoster
  },
  data() {
    return {
      movies: [],
      loadingSpinner: false,
    }
  },
  created() {
    const url = `https://www.omdbapi.com/?apikey=${omdb_apikey}&s=Batman`;
    this.loadingSpinner = true
    axios.get(url).then(response => {
      this.movies = response.data.Search
    }).catch(error => {
      console.log(error)
    }).finally(() => this.loadingSpinner = false)
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem, 2rem;

  &__content {
    width: inherit;
  }
}
</style>
