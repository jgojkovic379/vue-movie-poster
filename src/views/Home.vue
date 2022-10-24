<template>
  <div id="home">
    <h1>Home page</h1>
    
    <div v-if="movies && movies.length" class="main-container">
      <div class="main-container__content grid-auto-320 grid-gap-4">
        <movie-poster v-for="(movie, index) in movies" :key="index" :movie_data="movie"></movie-poster>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loadingSpinner" class="loading-mask">
      <div class="loading-wrapper">
        <span>Loading...</span>
      </div>
    </div>

  </div>
</template>

<script>
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
  async created() {
    this.$store.dispatch('resetNotify', '');
    this.loadingSpinner = true;
    this.movies = this.$store.state.movies;
    if (this.movies.length < 1) {
      this.movies = await this.$store.dispatch('getMovies', { title: 'Batman' });
    }
    this.loadingSpinner = false;
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
