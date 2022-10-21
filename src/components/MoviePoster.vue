<template>
    <div class="movie-box" @click="$router.push(`/movie/${movie_data.imdbID}`)">
        <h3>{{movie_data.Title}}</h3>
        <img :src="movie_data.Poster"/>
        <div class="movie-box__bottom">
            <div>Year: <strong>{{movie_data.Year}}</strong></div>
            <div>Type: <strong>{{movie_data.Type}}</strong></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoviePoster",
    props: {
        movie_data: Object
    }
}
</script>

<style lang="scss" scoped>
.movie-box {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    text-align: center;
    background-color: #dcdcdf;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        background: transparentize(rgb(189, 183, 183), .2);
    }
    h3 {
        height: 2.5rem;
    }
    img {
        width: 100%;
    }
    &__bottom {
        padding: 1rem 0.3rem;
        text-align: left;
    }
}
</style>