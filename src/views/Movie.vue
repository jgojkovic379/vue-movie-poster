<template>
  <div style="padding: 2rem;">
    <div v-if="movieData" class="movie">
      <h2>{{movieData.Title}}</h2>
      <img :src="movieData.Poster"/>
      <div>
        <div class="movie__year"><strong>{{movieData.Year}}</strong></div>
        <div v-if="movieData.Plot" class="movie__plot">
          <p>{{movieData.Plot}}</p>
        </div>
        <div v-if="movieData.Ratings" class="movie__ratings">
          <div v-for="(rating, index) in movieData.Ratings" :key="index">
            <strong>{{rating.Value}}</strong>
            <span>({{rating.Source}})</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="errorText" class="error-block">
      {{errorText}}
    </div>

    <div style="margin-top: 3rem;">
      <router-link to="/"> Back </router-link>
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
import { getMovie } from "../services";

export default {
  data() {
    return {
      movieId: this.$route.params.id,
      movieData: null,
      errorText: '',
      loadingSpinner: false,
    }
  },
  async created() {
    this.$store.dispatch('resetNotify', '');
    this.errorText = '';
    this.movieData = this.$store.getters.getMovie(this.movieId);
    if (!this.movieData) {
      this.loadingSpinner = true;
      const data = await getMovie({id: this.movieId});
      if (!data.err) {
        this.movieData = data.Response === 'True' && data;
        this.errorText = data.Response === 'False' && data.Error;
      } else {
        this.$store.dispatch('resetNotify', data.err.Error);
      }
      this.loadingSpinner = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.movie {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  &__year {
    margin-top: 0.7rem;
  }
  &__plot {
    width: 300px;
    text-align: justify;
  }
  &__ratings {
    text-align: left;
    font-style: italic;
  }
}
.error-block {
  color: red;
}
a {
  color: rgb(124, 124, 207);
}
</style>
