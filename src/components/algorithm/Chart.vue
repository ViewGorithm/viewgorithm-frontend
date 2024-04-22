<template>
  <h3 class="text-xl font-oswald">Time Complexity</h3>
  <p class="pb-6">It basically only shows 'average' and we're going to add the worst and best in the soon.</p>
  <Line class="chart" :data="data" :options="options" />
</template>
  
  <script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from '@/stores/chartConfig'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return chartConfig
  }
}
</script>
  

  <style>
.chart {
  min-width: 100px;
  width: 80%;
  height: 80%;
}
</style>
  