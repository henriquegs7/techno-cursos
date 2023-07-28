<script lang="ts">
import fetchData from '../mixins/fetchData'

export default {
  name: 'AulaView',
  props: ['aula'],
  mixins: [fetchData],
  created() {
    this.fetchData(`/aula/${this.aula}`)
  },
  beforeRouteUpdate(to: any, from: any, next: any) {
    this.fetchData(`/aula/${to.params.aula}`)
    next()
  }
}
</script>

<template>
  <div class="aua">
    <div v-if="loading">
      <LoadingComp />
    </div>
    <transition mode="out-in">
      <div v-if="api">
        <h2>{{ api.nome }}</h2>
        <div class="video">
          <iframe
            key="api.nome"
            :src="`https://www.youtube.com/embed/${api.youtube}`"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.video {
  position: relative;
  padding-bottom: 56.25%;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
