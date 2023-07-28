<script lang="ts">
export default {
  name: 'HeaderComp'
}
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <RouterLink to="/">Techno</RouterLink>
      </div>
      <ul>
        <li><RouterLink to="/cursos">Curso</RouterLink></li>
        <li><RouterLink to="/contato">Contato</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: #234;
}

header a {
  color: white;
}

a.router-link-active {
  color: #4b8;
}

nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  flex: 1;
}

.logo a {
  font-size: 1.2rem;
  color: white;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}
</style>
