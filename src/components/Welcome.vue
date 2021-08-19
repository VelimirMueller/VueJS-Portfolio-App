<template>
  <section id="welcome"> 
    <div class="max-w mx-auto sm:px-6 lg:px-8 h-12 bg-gray-900 h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full background-image-container bg-opacity-50">
        <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <div class="max-w-6xl mx-auto py-28 h-full">
          <!-- Content goes here -->

          <div class="h-full mb-12">
              <div class="inset-0 w-full min-h-full bg-gray-900 bg-opacity-50 text-white flex items-center justify-center lg:text-5xl text-base rounded-full mb-24 lg:mb-8">
                <span class="text-center px-12 transition-full duration-500 w-full">
                  <p id="p1" class="mt-12 text-2xl lg:text-4xl"></p>
                  <p id="p2" class="text-gray-300 lg:text-2xl text-l mt-8"></p>
                  <p id="p3" class="text-gray-300 lg:text-2xl text-l py-2"></p>
                  <p id="p4" class="text-gray-300 lg:text-2xl text-l py-2"></p>
                  <div class="w-full text-center mt-2">
                    <button id="b1" v-on:click="show" class="p-2 mb-20 lg:h-16 lg:text-2xl border-2 rounded-full text-center hover:bg-white hover:text-purple-900 hover:border-gray-500 transition-full w-2/3 duration-500">WHO I AM</button>
                  </div>
                </span>
                
              </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clickcounter: 0,
      textblock: {
        block_1: [
          'Hello dear visitor, good to have you here!',
          'My name is Velimir Müller and since July 2021 I am an graduated IT specialist for application development.',
          'I am looking for a Junior web developer position and maybe you are my future employer so I am happy you are visiting this page.',
          '',
          'READ MORE'],
        block_2: [
          'Why should you hire me?',
          'Because I love what I do and thats why I am constantly learning and improving myself in the web development field.',
          'I am not afraid to dive into new technologies because developing software is not just my profession of choice but also my hobby.',
          'Besides that I have strong social skills and think of myself as an absolute teamplayer.',
          'READ MORE'
        ],
        block_3: [
          'What are my technical skills?',
          'For most projects I have used the laravel or symfony framework as backend tools and I really enjoyed to work with templating engines like Blade or Twig.',
          'I was able to get some hands-on experience with bootstrap, tailwindcss and SCSS too.',
          'When it comes to JavaScript I am not afraid to try new libraries or frameworks like Vue.js or Chart.js',
          'READ MORE'
        ],
        block_4: [
          'What else?',
          'I like working with CLIs and I had the opporunity to work with Linux server systems during my intern.',
          'I am also a huge fan of the Raspberry Pie and have set up alot of servers on it already.',
          'Also I have some knowledge about SQL and I was using Figma for some pictures of this site.',
          'USED TECHNOLOGIES',
        ],
      }
    };
  },
  methods: {
    show: function () 
    {
      /* TODO refactor this abomination ;) - really ! */
      this.clickcounter++;
      if (this.clickcounter==1){
        document.getElementById('p1').innerHTML = this.textblock.block_1[0];
        document.getElementById('p2').innerHTML = this.textblock.block_1[1];
        document.getElementById('p3').innerHTML = this.textblock.block_1[2];
        document.getElementById('p4').innerHTML = this.textblock.block_1[3];
        document.getElementById('b1').innerHTML = this.textblock.block_1[4];
      }
      if (this.clickcounter==2){
        document.getElementById('p1').innerHTML = this.textblock.block_2[0];
        document.getElementById('p2').innerHTML = this.textblock.block_2[1];
        document.getElementById('p3').innerHTML = this.textblock.block_2[2];
        document.getElementById('p4').innerHTML = this.textblock.block_2[3];
        document.getElementById('b1').innerHTML = this.textblock.block_2[4];
      }
      if (this.clickcounter==3){
        document.getElementById('p1').innerHTML = this.textblock.block_3[0];
        document.getElementById('p2').innerHTML = this.textblock.block_3[1];
        document.getElementById('p3').innerHTML = this.textblock.block_3[2];
        document.getElementById('p4').innerHTML = this.textblock.block_3[3];
        document.getElementById('b1').innerHTML = this.textblock.block_3[4];
      }
      if (this.clickcounter==4){
        document.getElementById('p1').innerHTML = this.textblock.block_4[0];
        document.getElementById('p2').innerHTML = this.textblock.block_4[1];
        document.getElementById('p3').innerHTML = this.textblock.block_4[2];
        document.getElementById('p4').innerHTML = this.textblock.block_4[3];
        document.getElementById('b1').innerHTML = this.textblock.block_4[4];
      }
      if(this.clickcounter==5){
        document.getElementById("technologies").scrollIntoView();
        this.clickcounter=0;
        this.show();
      }
    }
  }
}
</script>

<style scoped>

.background-image-container{
  background-image: url("../assets/community.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

</style>