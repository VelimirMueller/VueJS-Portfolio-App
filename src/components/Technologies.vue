<template>
  <section
    id="technologies"
    v-on:mouseenter="
      animate('mouseenter', 'hover-bounce-images', 'animate-pulse', '20000')
    "
    class="bg-gray-900"
  >
    <div class="max-w mx-auto sm:px-6 lg:px-8 h-12 bg-gray-900 min-h-screen">
      <div
        class="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-full
          background-image-container
        "
      >
        <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <div class="lg:w-6xl w-4/5 mx-auto py-20 h-full">
          <!-- Content goes here -->

          <div
            class="
              tech-container
              bg-opacity-90 bg-indigo-100
              lg:my-24
              rounded-3xl
              lg:rounded-full
              border-2 border-purple-500
            "
          >
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div
                class="
                  grid grid-cols-1
                  gap-8
                  sm:flex-row
                  md:grid-cols-3
                  lg:grid-cols-3
                "
              >
                <div
                  class="
                    hover-bounce-images
                    col-span-2
                    flex
                    justify-center
                    sm:col-span-2
                    md:col-span-2
                    lg:col-span-1
                  "
                >
                  <img
                    class="h-32 w-full lg:h-full hover-bounce-images"
                    src="../assets/vuejs_logo_figma.svg"
                    alt="vuejs"
                  />
                </div>

                <div
                  class="
                    hover-bounce-images
                    col-span-2
                    flex
                    justify-center
                    sm:col-span-2
                    md:col-span-2
                    lg:col-span-1
                  "
                >
                  <img
                    class="h-32 w-full lg:h-full hover-bounce-images"
                    src="../assets/chartjs_logo_figma.svg"
                    alt="chartjs"
                  />
                </div>

                <div
                  class="
                    hover-bounce-images
                    col-span-2
                    flex
                    justify-center
                    sm:col-span-2
                    md:col-span-2
                    lg:col-span-1
                  "
                >
                  <img
                    class="h-32 w-full lg:h-full hover-bounce-images"
                    src="../assets/tailwindcss_logo_figma.svg"
                    alt="tailwind"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    animate: function (event, element, value, duration) {
      // animate helper - calls TW animation class, works with multiple class childs
      var v = document.getElementsByClassName(element); // className Selector

      var _loop = function _loop(i) {
        //forloop 0 - lenght of DOM array
        v[i].addEventListener(event, function () {
          v[i].classList.add(value); // Add tw animation class name to v[i]

          setTimeout(function () {
            // Start timeout function to automatically stop bounce animation
            v[i].classList.remove(value);
          }, duration); //End timeout function
        });
      };

      for (
        var i = 0;
        i < document.getElementsByClassName(element).length;
        i++
      ) {
        _loop(i);
      }
    },
  },
};
</script>

<style scoped>
.background-image-container {
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

section {
  position: relative;
  min-height: 900px !important;
}
</style>