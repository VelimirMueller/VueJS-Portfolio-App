<template>
  <section
    id="startscreen"
    v-on:load="animateScreen"
    v-on:mouseenter="fadeOut"
    class="bg-gray-900"
  >
    <img
      id="bg"
      class="h-screen w-screen"
      src="../assets/paralax_img/background.jpg"
      alt="bg"
    />
    <img
      id="moon"
      class="md:w-1/4 w-1/2"
      src="../assets/paralax_img/moon.png"
      style="left: 0"
      alt="moon"
    />
    <img
      id="skyline"
      class="w-full h-full"
      src="../assets/paralax_img/skyline.png"
      style="bottom: 0"
      alt="skyline"
    />
    <img
      id="landscape"
      class="w-full h-full"
      src="../assets/paralax_img/landscape.png"
      style="bottom: 0"
      alt="landscape"
    />
    <p
      id="landscapetext"
      class="text-center text-purple-200 lg:text-8xl lg:text-8xl text-4xl"
      style="white-space: pre"
    >
      {{ websiteContent.headline }}
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      websiteContent: {
        headline: "Welcome to\n my portfolio project",
      },
      //select elements to animate
      bg: document.getElementById("bg"),
      moon: document.getElementById("moon"),
      skyline: document.getElementById("skyline"),
      landscape: document.getElementById("landscape"),
      landscapetext: document.getElementById("landscapetext"),
    };
  },
  methods: {
    // moves .png files based on scrollY to create parallax effect
    animateScreen: window.addEventListener("scroll", function () {
      this.bg.style.top = window.scrollY * 0.5 + "px";
      this.moon.style.left = window.scrollY * 1.25 + "px";
      this.skyline.style.top = window.scrollY * 3 * 0.45 + "px";
      this.landscape.style.right = window.scrollY * 0.95 + "px";
      this.landscapetext.style.right = window.scrollY * 0.45 + "px";
    }),
    //fades out scroll button by default
    fadeOut: function () {
      document.getElementById("scrollupbutton").classList.add("hidden");
    },
  },
};
</script>

<style scoped>
/* section container */
#startscreen {
  background: #1a202c;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

#startscreen:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  background: linear-gradient(to top, #1a202c, transparent);
  z-index: 10000;
}

#startscreen after {
  content: "";
  position: absolute;
  background: #1a202c;
  z-index: 10000;
}

#bg {
  min-height: 700px;
}

/* img styles */
#startscreen img {
  position: absolute;
  object-fit: cover;
}

/* headline styles */
#landscapetext {
  position: relative;
  z-index: 2;
  text-shadow: #1a202c 4px 2px 15px;
  font-weight: bold;
}
</style>