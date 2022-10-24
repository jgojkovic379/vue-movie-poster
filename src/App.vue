<template>
  <div id="app">
    <div class="notified-msg">{{$store.state.notifiedMessage}}</div>
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}

#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textColor);
}

.notified-msg {
  padding: 1rem;
  color: red;
}

</style>
