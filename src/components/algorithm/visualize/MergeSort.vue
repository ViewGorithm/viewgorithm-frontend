<template>
    <div class="flex flex-col items-center justify-center">
        <div>
            <CustomButton class="mr-2" buttonLabel="Play" @click="playSorting"></CustomButton>
            <CustomButton buttonLabel="Pause" @click="pauseSorting"></CustomButton>
            <CustomButton class="mr-2" buttonLabel="Shuffle" @click="shuffleData"></CustomButton>
        </div>
        <svg ref="svg" :width="width" :height="height"></svg>
    </div>
  </template>
  
  <script>
  import * as d3 from 'd3'
  import CustomButton from '@/components/customComponents/CustomButton.vue'
  
  export default {
    data() {
      return {
        data: [],
        width: 1100,
        height: 500,
        duration: 500,
        interval: null,
        isPaused: false
      }
    },
    components: {
      CustomButton
    },
    methods: {
      init() {
        this.shuffleData()
        this.drawChart()
      },
      shuffleData() {
        this.data = d3.shuffle(d3.range(7)).map((d, i) => ({
          value: d,
          color: d3.schemeCategory10[i % 10]
        }))
        this.drawChart()
      },
      drawChart() {
        const svg = d3.select(this.$refs.svg).attr('viewBox', '50 50 ${this.width} ${this.height}')
        svg.selectAll('*').remove()
  
        const g = svg
          .append('g')
          .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`)
          
  
        const nodes = g
          .selectAll('g')
          .data(this.data)
          .enter()
          .append('g')
          .attr('transform', (d, i) => `translate(${(i - 2) * 100}, ${(i % 2 === 0 ? -200 : 200)})`)
  
        nodes
          .append('circle')
          .attr('r', 20)
          .attr('fill', (d) => d.color)
  
        nodes
          .append('text')
          .attr('dy', 5)
          .attr('text-anchor', 'middle')
          .attr('fill', 'white')
          .text((d) => d.value)
      },
      playSorting() {
        if (this.interval) return
  
        this.isPaused = false
        const steps = this.mergeSortSteps([...this.data])
  
        let stepIndex = 0
        const executeStep = () => {
          if (stepIndex < steps.length && !this.isPaused) {
            this.animateStep(steps[stepIndex])
            stepIndex++
          }
        }
  
        this.interval = setInterval(executeStep, this.duration)
      },
      pauseSorting() {
        this.isPaused = true
        clearInterval(this.interval)
        this.interval = null
      },
      animateStep(step) {
        const svg = d3.select(this.$refs.svg).select('g')
        const nodes = svg.selectAll('g').data(step, (d) => d.value)
  
        nodes
          .transition()
          .duration(this.duration)
          .attr('transform', (d, i) => `translate(${(i - 2) * 100}, ${0})`) // 정렬 중에 한 y축으로 모임
          .on('start', function () {
            d3.select(this).select('circle').attr('r', 25).attr('y', 0)
          })
          .on('end', function () {
            d3.select(this).select('circle').attr('r', 20).attr('y', 0)
          })
      },
      mergeSortSteps(array) {
        let steps = []
        const mergeSort = (array) => {
          if (array.length <= 1) {
            return array
          }
  
          const middle = Math.floor(array.length / 2)
          const left = array.slice(0, middle)
          const right = array.slice(middle)
  
          return merge(mergeSort(left), mergeSort(right))
        }
  
        const merge = (left, right) => {
          let resultArray = [],
            leftIndex = 0,
            rightIndex = 0
  
          while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex].value < right[rightIndex].value) {
              resultArray.push(left[leftIndex])
              leftIndex++
            } else {
              resultArray.push(right[rightIndex])
              rightIndex++
            }
            steps.push([...resultArray, ...left.slice(leftIndex), ...right.slice(rightIndex)])
          }
  
          return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
        }
  
        mergeSort(array)
        return steps
      }
    },
    mounted() {
      this.init()
    }
  }
  </script>
  
  <style>
  button {
    margin: 5px;
  }
  </style>