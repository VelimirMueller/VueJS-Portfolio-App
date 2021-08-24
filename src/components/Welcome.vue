<template>
  <section id="welcome" class="bg-gray-900">
    <div class="max-w mx-auto sm:px-6 lg:px-8 h-12 bg-gray-900 h-screen">
      <div
        class="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-full
          background-image-container
          bg-gray-900 bg-opacity-50
        "
      >
        <div class="max-w-6xl mx-auto h-full">
          <div class="h-full mb-12">
            <div
              class="
                inset-0
                w-full
                min-h-screen
                bg-gray-900 bg-opacity-50
                text-white
                flex
                items-center
                justify-center
                lg:text-5xl
                text-base
                mb-24
                lg:mb-8
              "
            >
              <span
                id="textblock"
                class="text-center lg:text-left px-12 w-full"
              >
                <p
                  id="p1"
                  class="
                    opacity-0
                    transition-full
                    duration-1000
                    ease-linear
                    mt-12
                    text-2xl
                    lg:text-4xl
                    text-center
                    underline
                  "
                ></p>
                <p
                  id="p2"
                  class="
                    opacity-0
                    transition-full
                    duration-1000
                    ease-linear
                    text-gray-300
                    lg:text-2xl
                    text-l
                    mt-8
                  "
                ></p>
                <p
                  id="p3"
                  class="
                    opacity-0
                    transition-full
                    duration-1000
                    ease-linear
                    text-gray-300
                    lg:text-2xl
                    text-l
                    py-2
                  "
                ></p>
                <p
                  id="p4"
                  class="
                    opacity-0
                    transition-full
                    duration-1000
                    ease-linear
                    text-gray-300
                    lg:text-2xl
                    text-l
                    py-2
                  "
                ></p>
                <div class="w-full text-center mt-2">
                  <button
                    id="b1"
                    v-on:click="show"
                    class="
                      opacity-1
                      transition-full
                      duration-500
                      p-2
                      mb-20
                      lg:h-16
                      lg:text-2xl
                      border-b-2 border-gray-700
                      rounded-full
                      text-center
                      hover:bg-white
                      hover:text-purple-900
                      hover:border-gray-500
                      transition-full
                      lg:w-3/4
                      w-2/3
                      duration-500
                    "
                  >
                    {{ initalButtonText }}
                  </button>
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
import TextData from "../component_data/textdata.js";

export default {
  data() {
    return {
      clickcounter: 0,
      textblock: TextData,
      initalButtonText: "WHO I AM",
    };
  },
  methods: {
    // this function maps all properties of textblock Object, data is imported
    show: function () {
      let values = Object.values(this.textblock)[this.clickcounter];
      // for loop to map all properties of Object
      for (const number in values) {
        let text = values[number];
        // last element will passed to button inner html the rest in <p></p> of this component
        if (number < values.length - 1) {
          let childElem = document.getElementById("textblock").children[number];
          childElem.innerHTML = text;
          childElem.classList.remove("opacity-0");
        } else {
          document.getElementById("b1").innerHTML = text;
        }
      } // end for loop elements in array

      this.clickcounter++; //counts clicks

      //if clickcount is the same as the properties of Object - 1 -> scroll to next section and first property will be loaded again
      if (this.clickcounter > Object.values(this.textblock).length) {
        document.getElementById("technologies").scrollIntoView();
        this.clickcounter = 0;
        this.iterator = 0;
        this.show();
      } // end if clickcounter ==5
    }, //end show()
  }, //end methods
}; //end data()
</script>

<style scoped>
.background-image-container {
  background-image: url("../assets/community.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

section {
  position: relative;
}
</style>



