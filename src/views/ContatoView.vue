<script lang="ts">
import fetchData from '../mixins/fetchData'

export default {
  name: 'ContatoView',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato')
  }
}
</script>

<template>
  <div class="contato">
    <div v-if="loading">
      <LoadingComp />
    </div>
    <transition mode="out-in">
      <div v-if="api">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li>
            <b>Email: </b>
            {{ api.contato.email }}
          </li>
          <li>
            <b>Telefone: </b>
            {{ api.contato.telefone }}
          </li>
          <li>
            <b>Endereço: </b>
            {{ api.contato.endereco }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
