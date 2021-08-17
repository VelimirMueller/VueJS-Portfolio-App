<template>
  <Navbar />
  <Hero />
  <Content />
  <Lina />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Content from './components/Content.vue';
import Lina from './components/Lina.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Content,
    Lina
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
