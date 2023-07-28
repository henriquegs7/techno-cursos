<script lang="ts">
import fetchData from '../mixins/fetchData'

export default {
  name: 'CursoView',
  props: ['curso'],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`)
  }
}
</script>

<template>
  <div class="curso">
    <div v-if="loading">
      <LoadingComp />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="{ id, nome } in api.aulas" :key="id">
              <RouterLink :to="{ name: 'aula', params: { aula: id } }">
                {{ nome }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <RouterView />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.aulas li a.router-link-active {
  background: #4b8;
  color: white;
}
</style>
