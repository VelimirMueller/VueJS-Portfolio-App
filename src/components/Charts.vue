<template>
  <section id="charts" class="bg-gray-900">
    <div class="max-w mx-auto sm:px-6 lg:px-8 min-h-screen h-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div class="lg:w-6xl w-full mx-auto py-12 h-full">
          <!-- Content -->
          <h1 class="text-4xl text-gray-200 mb-12 underline">
            {{ websiteContent.headline }}
          </h1>
          <div class="chart-container">
            <canvas
              id="firstchart"
              class="
                mt-30
                w-4/5
                mx-auto
                bg-gray-800
                background-image-container
                rounded-3xl
                lg:rounded-full
                bg-white
              "
            ></canvas>
          </div>
          <!-- Content end -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from "chart.js";
import ChartData from "../component_data/chartdata.js";

export default {
  data() {
    return {
      websiteContent: {
        headline: "Programming Skills",
      },

      ChartData: ChartData,
    };
  },

  mounted() {
    const ctx = document.getElementById("firstchart");
    new Chart(ctx, this.ChartData);
  },
};
</script>

<style scoped>
/* responsive chart styl */
.chart-container {
  margin: auto;
  height: 70vh;
  width: 75vw;
}

.background-image-container {
  background-image: url("../assets/chartbg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  opacity: 1;
}

section {
  position: relative;
}
</style>