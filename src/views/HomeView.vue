<script lang="ts">
import fetchData from '../mixins/fetchData'

export default {
  name: 'HomeView',
  mixins: [fetchData],
  created() {
    this.fetchData('/home')
  }
}
</script>

<template>
  <div class="home">
    <div v-if="loading">
      <LoadingComp />
    </div>
    <transition mode="out-in">
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre o {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <RouterLink to="/cursos">
            <button class="btn-cursos">Cursos</button>
          </RouterLink>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="{ nome, descricao } in api.avaliacoes" :key="nome">
                <p>{{ nome }}</p>
                <p>{{ descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprenda Web Design" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
