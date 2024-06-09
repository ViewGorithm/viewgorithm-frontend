<template>
  <h3 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">Big-O Complexity</h3>
  <div class="text-lg my-5">The average time complexity of this algorithm is <span class=" rounded-3xl bg-zinc-900 px-4 py-2 font-bold text-white">{{ timeComplexity }}</span></div>
  <Line class="chart" :data="data" :options="options" />
  <p class="py-10 text-xs text-red-500">  
    It basically only shows 'average' and we're going to add the worst and best in the soon.
  </p>
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
  props:{
    timeComplexity: {
      type: String,
      required: true
    }
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
  