<template>
  <section
    id="hero"
    class="pt-12 scroll"
    v-on:mouseleave="fadeIn"
    v-on:mouseenter="fadeOut"
  >
    <div
      class="
        max-w
        text-center
        lg:text-left
        sm:px-6
        lg:px-8
        h-12
        bg-gray-900
        h-full
        content-center
      "
    >
      <div class="grid lg:grid-flow-col lg:h-full">
        <!-- left hero section -->
        <div class="lg:mx-auto lg:my-auto mt-0 mt-12 px-4">
          <p class="text-purple-500 text-2xl py-2 lg:text-4xl">
            {{ websiteContent.subheadline }}
          </p>
          <h2 class="underline text-white text-4xl py-1 lg:text-5xl mt-2">
            {{ websiteContent.headline }}
          </h2>
          <p
            class="text-white text-md lg:text-3xl mt-1"
            style="white-space: pre"
          >
            {{ websiteContent.headlineDescription }}
          </p>
          <a href="#contact" class="cursor-a">
            <button
              class="
                mt-12
                h-12
                text-lg
                px-5
                mt-4
                mb-4
                text-indigo-100
                transition-colors
                duration-150
                bg-transparent
                border-2 border-white
                rounded-full
                focus:shadow-outline
                hover:bg-purple-800
                mx-auto
              "
            >
              {{ websiteContent.ctaButton }}
            </button>
          </a>
        </div>

        <!-- right hero section -->
        <div
          class="
            mx-auto
            my-auto
            px-4
            rounded-full
            flex
            items-center
            justify-centers
          "
        >
          <img
            class="rounded-full h-2/3 mb-14 mt-14 border-2 border-purple-700"
            src="../assets/alien_figma.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      websiteContent: {
        subheadline: "Hello World, this App was created with Vue.js",
        headline: "Hi, I'm Velimir Müller",
        headlineDescription:
          "IT Specialist for Application Development \n(Junior) Web Developer",
        ctaButton: "Get in touch with me",
      },
    };
  },
  methods: {
    /* fades in or out based on mouse position of hero section */
    fadeIn: function () {
      document.getElementById("scrollupbutton").classList.remove("hidden");
    },
    fadeOut: function () {
      document.getElementById("scrollupbutton").classList.add("hidden");
    },
  },
};
</script>

<style>
.cursor-a {
  cursor: pointer;
}
</style>