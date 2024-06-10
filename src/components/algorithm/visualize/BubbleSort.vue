<template>
    <div>
        <div class="controls">
            <CustomButton buttonLabel="Play" @click="startAnimation" />
            <CustomButton buttonLabel="Pause" @click="pauseAnimation" />
            <CustomButton buttonLabel="Shuffle" @click="shuffleData" />
        </div>
        <div ref="chart" ></div>
    </div>
</template>

<script>
import * as d3 from 'd3';
import CustomButton from '@/components/customComponents/CustomButton.vue'

export default {
    name: 'BubbleSort',
    data() {
        return {
            data: [],
            originalData: [],
            width: 900,
            height: 300,
            animationInterval: null,
            pause: false,
            sorted: false,
            colors: ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231'],
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
                this.bubbleSort();
            }
        },
        pauseAnimation() {
            this.pause = true;
        },
        shuffleData() {
            this.originalData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
            this.data = [...this.originalData];
            this.sorted = false;
            this.renderNodes();
        },
        bubbleSort() {
            if (!this.pause && !this.sorted) {
                this.animationInterval = setInterval(() => {
                    let swapped = false;
                    for (let i = 0; i < this.data.length - 1; i++) {
                        if (this.data[i] > this.data[i + 1]) {
                            [this.data[i], this.data[i + 1]] = [this.data[i + 1], this.data[i]];
                            swapped = true;
                        }
                    }
                    if (!swapped) {
                        clearInterval(this.animationInterval);
                        this.sorted = true;
                    }
                    this.renderNodes();
                }, 500);
            }
        },
    },
};
</script>

<style>
button {
    margin: 10px;
}
</style>