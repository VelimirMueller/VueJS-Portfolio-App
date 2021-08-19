<template>
  <section id="hero" class="pt-12" v-on:mouseleave="fadeIn" v-on:mouseenter="fadeOut">
    <div class="max-w lg:text-left text-center sm:px-6 lg:px-8 h-12 bg-gray-900 h-full content-center">
      <div class="grid lg:grid-flow-col lg:h-full">
        
        <!-- left hero section -->
        <div class="lg:mx-auto lg:my-auto mt-0 mt-12 px-4">
          <p class="text-purple-500 text-2xl py-2 lg:text-4xl">Hello World !</p>
          <h2 class="text-white text-4xl py-1 lg:text-5xl">VLM WEB DEVELOPMENT</h2>
          <p class="text-white text-2xl lg:text-3xl">Welcome to my SPA project. Created with vue.js</p>

          <button class="h-12 text-lg px-5 mt-4 mb-4 text-indigo-100 transition-colors duration-150 bg-transparent border-2 border-white rounded-full focus:shadow-outline hover:bg-purple-800">Documentation of this project</button>
        </div>

        <!-- right hero section -->
        <div class="mx-auto my-auto px-4 rounded-full flex items-center justify-center">
          <img class="rounded-full h-2/3 mb-14 mt-14 border-2 border-purple-700" src="../assets/alien_figma.png" alt="">
        </div>
  
      </div>
    </div>

    

  </section>
</template>

<script>
  export default{
        methods: {
            fadeIn: function() {
                document.getElementById("scrollupbutton").classList.remove("hidden")
              },
              fadeOut: function() {
                document.getElementById("scrollupbutton").classList.add("hidden")
              },
            }
        }
    
</script>

<style>
  
</style>