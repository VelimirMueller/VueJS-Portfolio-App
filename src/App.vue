<template>
  <Navbar />
  <Startscreen />
  <Hero />
  <Welcome />
  <Technologies />
  <Charts />
  <CV />
  <Contact />
  <ScrollUp />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Welcome from "./components/Welcome.vue";
import Technologies from "./components/Technologies.vue";
import Charts from "./components/Charts.vue";
import Startscreen from "./components/Startscreen.vue";
import ScrollUp from "./components/ScrollUp.vue";
import Contact from "./components/Contact.vue";
import CV from "./components/CV.vue";

export default {
  name: "App",
  components: {
    Startscreen,
    Navbar,
    Hero,
    Welcome,
    Technologies,
    Charts,
    CV,
    Contact,
    ScrollUp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato");
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a:hover {
  cursor: pointer !important;
}
html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: start;
  min-height: 600px;
}

#contact {
  scroll-snap-align: start;
}
</style>
