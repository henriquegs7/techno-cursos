<script lang="ts">
import HeaderComp from './components/HeaderComp.vue'

export default {
  components: { HeaderComp }
}
</script>

<template>
  <div class="app">
    <HeaderComp />
    <RouterView class="container" />
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

@media screen and (max-width: 750px) {
  .conteudo {
    display: block;
  }
}
</style>
