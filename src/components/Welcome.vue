<template>
  <section id="welcome"> 
    <div class="max-w mx-auto sm:px-6 lg:px-8 h-12 bg-gray-900 h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full background-image-container bg-opacity-50">
        <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <div class="max-w-6xl mx-auto py-28 h-full">
          <!-- Content goes here -->

          <div class="h-full mb-12">
              <div class="inset-0 w-full min-h-full bg-gray-900 bg-opacity-50 text-white flex items-center justify-center lg:text-5xl text-base mb-24 lg:mb-8">
                <span id="textblock" class="text-center lg:text-left px-12 w-full">
                  <p id="p1" class="opacity-0 transition-full duration-1000 ease-linear mt-12 text-2xl lg:text-4xl text-center"></p>
                  <p id="p2" class="opacity-0 transition-full duration-1000 ease-linear text-gray-300 lg:text-2xl text-l mt-8"></p>
                  <p id="p3" class="opacity-0 transition-full duration-1000 ease-linear text-gray-300 lg:text-2xl text-l py-2"></p>
                  <p id="p4" class="opacity-0 transition-full duration-1000 ease-linear text-gray-300 lg:text-2xl text-l py-2"></p>
                  <div class="w-full text-center mt-2">
                    <button id="b1" v-on:click="show" class="opacity-1 transition-full duration-500 p-2 mb-20 lg:h-16 lg:text-2xl border-2 rounded-full text-center hover:bg-white hover:text-purple-900 hover:border-gray-500 transition-full w-2/3 duration-500">WHO I AM</button>
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
import TextData from '../component_data/textdata.js';

export default {
  data() {
    return {
      clickcounter: 0,
      iterator: 0,
      textblock: TextData,
    };
  },
  methods: {
    // this function maps all properties of textblock Object, data is imported
    show: function () 
    {
      this.clickcounter++; //counts clicks
 
      // eslint-disable-next-line
      for(const properties in this.textblock){ //checks amount of properties in textblock 
        if (this.clickcounter==this.iterator+1){
          // for loop to map all properties of Object
          for(const element in this.textblock[Object.keys(this.textblock)[this.iterator]]){
            
            // last element will passed to button inner html the rest in <p></p> of this component
            if(element<this.textblock[Object.keys(this.textblock)[this.iterator]].length - 1){
              document.getElementById('textblock').children[element].innerHTML = this.textblock[Object.keys(this.textblock)[this.iterator]][element]
              document.getElementById('textblock').children[element].classList.remove('opacity-0');
            } else {
              document.getElementById('b1').innerHTML = this.textblock[Object.keys(this.textblock)[this.iterator]][element]
            } 
          } // end for loop elements in array
        } //end if clickcounter == this.iterator +1
      }
      //iterate to next property of Object
      this.iterator++;

      //if clickcount is the same as the properties of Object -> scroll to next section and first property will be loaded again
      if(this.clickcounter>Object.keys(this.textblock).length){
        document.getElementById("technologies").scrollIntoView();
        this.clickcounter=0;
        this.iterator=0;
        this.show();
      } // end if clickcounter ==5
    } //end show()

  } //end methods
} //end data()





</script>

<style scoped>

.background-image-container{
  background-image: url("../assets/community.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

</style>



