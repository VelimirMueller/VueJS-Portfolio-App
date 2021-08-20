<template>
    <section id="charts">
      <div class="max-w mx-auto sm:px-6 lg:px-8 h-12 bg-gray-900 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full background-image-container">
        
        <div class="lg:w-6xl w-full mx-auto py-28 h-full">
          <!-- Content -->
          <h1 class="text-2xl text-gray-300 mb-4">Visualization of all components of this app</h1>
          <div class="chart-container">
             <canvas id="firstchart" class="mt-30 w-4/5 mx-auto bg-gray-800 rounded-3xl bg-white"></canvas>
          </div> 
          <!-- Content end -->
        </div>
      </div>
    </div>
    
  </section>
  
</template>

<script>
import Chart from 'chart.js'
import ChartData from '../component_data/chartdata.js'

export default{
  name: 'Chart',
  data() {
    return {
      ChartData: ChartData,
    }
  },
  mounted() {
    const ctx = document.getElementById('firstchart');
    new Chart(ctx, this.ChartData);
  }
}
</script>

<style scoped>
  .chart-container {
  
  margin: auto;
  height: 70vh;
  width: 80vw;
}
</style>