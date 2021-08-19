<template>
  <Navbar />
  <Hero />
  <Welcome />
  <Technologies />
  <Charts />
  <Contact />
  <ScrollUp />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Welcome from './components/Welcome.vue';
import Technologies from './components/Technologies.vue';
import Charts from './components/Charts.vue';
import Contact from './components/Contact.vue';
import ScrollUp from './components/ScrollUp.vue';



export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Welcome,
    Technologies,
    Charts,
    Contact,
    ScrollUp,
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

html{
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

section{
  scroll-snap-align: start;
}

</style>
