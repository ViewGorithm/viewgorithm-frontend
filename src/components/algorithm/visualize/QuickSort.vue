<template>
    <div>
        <div class="controls">
            <CustomButton buttonLabel="Play" @click="startAnimation" />
            <CustomButton buttonLabel="Pause" @click="pauseAnimation" />
            <CustomButton buttonLabel="Shuffle" @click="shuffleData" />
        </div>
        <div ref="chart"></div>
    </div>
</template>

<script>
import * as d3 from 'd3';
import CustomButton from '@/components/customComponents/CustomButton.vue';

export default {
    name: 'QuickSort',
    data() {
        return {
            data: [],
            originalData: [],
            width: 1200,
            height: 600,
            animationInterval: null,
            pause: false,
            sorted: false,
            colors: ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabed4'],
        };
    },
    components: {
        CustomButton,
    },
    mounted() {
        this.initializeChart();
    },
    methods: {
        initializeChart() {
            this.svg = d3
                .select(this.$refs.chart)
                .append('svg')
                .attr('viewBox', `-80 0 ${this.width} ${this.height}`);

            this.shuffleData();
        },
        renderNodes() {
            const nodes = this.svg
                .selectAll('g')
                .data(this.data, (d) => d);

            const enterNodes = nodes
                .enter()
                .append('g')
                .attr('transform', (d, i) => `translate(${(i * this.width) / this.data.length}, ${this.height / 2})`);

            enterNodes
                .append('circle')
                .attr('r', 20)
                .attr('fill', (d, i) => this.colors[i])
                .attr('stroke', 'black')
                .attr('stroke-width', 2);

            enterNodes
                .append('text')
                .attr('dy', '.35em')
                .attr('text-anchor', 'middle')
                .attr('fill', 'black')
                .text((d) => d);

            nodes
                .transition()
                .duration(500)
                .attr('transform', (d, i) => `translate(${(i * this.width) / this.data.length}, ${this.height / 2})`);

            nodes.exit().remove();
        },
        startAnimation() {
            if (!this.sorted) {
                this.pause = false;
                this.data = [...this.originalData];
                this.quickSort(0, this.data.length - 1);
            }
        },
        pauseAnimation() {
            this.pause = true;
        },
        shuffleData() {
            this.originalData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
            this.data = [...this.originalData];
            this.sorted = false;
            this.renderNodes();
        },
        quickSort(low, high) {
            if (!this.pause && !this.sorted && low < high) {
                this.animationInterval = setInterval(() => {
                    const pivotIndex = this.partition(low, high);
                    this.quickSort(low, pivotIndex - 1);
                    this.quickSort(pivotIndex + 1, high);
                    this.renderNodes();
                }, 500);
            }
        },
        partition(low, high) {
            const pivot = this.data[high];
            let i = low - 1;

            for (let j = low; j <= high - 1; j++) {
                if (this.data[j] < pivot) {
                    i++;
                    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
                }
            }

            [this.data[i + 1], this.data[high]] = [this.data[high], this.data[i + 1]];
            return i + 1;
        },
    },
};
</script>

<style>
button {
    margin: 10px;
}
</style>