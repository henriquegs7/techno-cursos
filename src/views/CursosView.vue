<script lang="ts">
import fetchData from '../mixins/fetchData'

export default {
  name: 'CursosView',
  mixins: [fetchData],
  created() {
    this.fetchData('/cursos')
  }
}
</script>

<template>
  <div class="cursos">
    <div v-if="loading">
      <LoadingComp />
    </div>
    <transition mode="out-in">
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul class="cursos-lista">
          <li v-for="{ id, nome, totalAulas, horas, descricao } in api.cursos" :key="id">
            <h2>
              <RouterLink :to="{ name: 'curso', params: { curso: id } }">
                {{ nome }} - {{ totalAulas }} aulas | {{ horas }} horas
              </RouterLink>
            </h2>
            <p>{{ descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.cursos-lista li {
  margin-bottom: 40px;
}
</style>
