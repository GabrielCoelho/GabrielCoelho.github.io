<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nome from './components/Nome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg"  />

    <div class="wrapper">
      <Nome msg="Gabriel Coelho Soares" />
    </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <router-link to="/resume">Currículo</router-link>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  max-height: 60px;
}
header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  min-width: 50vw;
}
.logo {
  display: block;
  width: 60px;
  height: 60px;
  margin: 0 30px 0 0;
  padding-top: 0.5rem;
}

nav {
  max-width: 100vw;
  max-height: 60px;
  font-size: 16px;
  text-align: left;
  display: flex;
  padding-top: 0.5rem;
  margin-left: 25vw;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 0.5rem;
  text-align: center;
}

nav a:first-of-type {
  border: 0;
}

</style>
