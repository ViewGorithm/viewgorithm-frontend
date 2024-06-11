<template>
    <div id="quick-sort-visualizer">
        <div class="controls">
            <CustomButton buttonLabel="Play" @click="play"></CustomButton>
            <CustomButton buttonLabel="Pause" @click="pause"></CustomButton>
            <CustomButton buttonLabel="Shuffle" @click="shuffle"></CustomButton>
        </div>
        <svg ref="svg"></svg>
    </div>
</template>

<script>
import * as d3 from 'd3';
import CustomButton from '@/components/customComponents/CustomButton.vue';

export default {
    name: 'QuickSortVisualizer',
    data() {
        return {
            dataset: [4, 8, 15, 16, 23, 42, 1, 7, 3, 9, 14, 18],
            originalDataset: [],
            colors: [],
            width: 1000,
            height: 600,
            squareSize: 50,
            padding: 10,
            animationDuration: 700,
            isPaused: false,
            isPlaying: false,
        };
    },
    components: {
        CustomButton
    },
    mounted() {
        this.originalDataset = [...this.dataset];
        this.generateColors();
        this.createSvg();
        this.drawSquares();
    },
    methods: {
        createSvg() {
            this.svg = d3.select(this.$refs.svg)
                .attr('width', this.width)
                .attr('height', this.height);
        },
        generateColors() {
            this.colors = this.dataset.map(() => `hsl(${Math.random() * 360}, 100%, 75%)`);
        },
        drawSquares() {
            const totalWidth = this.dataset.length * (this.squareSize + this.padding);
            const leftMargin = (this.width - totalWidth) / 2;

            const squares = this.svg.selectAll('g')
                .data(this.dataset)
                .enter()
                .append('g')
                .attr('transform', (d, i) => `translate(${leftMargin + i * (this.squareSize + this.padding)}, 0)`);

            squares.append('rect')
                .attr('x', 0)
                .attr('y', this.height / 2 - this.squareSize / 2)
                .attr('width', this.squareSize)
                .attr('height', this.squareSize)
                .attr('fill', (d, i) => this.colors[i]);

            squares.append('text')
                .attr('x', this.squareSize / 2)
                .attr('y', this.height / 2)
                .attr('dy', '0.35em')
                .attr('text-anchor', 'middle')
                .text(d => d)
                .style('fill', 'black');
        },
        updateSquares() {
            const totalWidth = this.dataset.length * (this.squareSize + this.padding);
            const leftMargin = (this.width - totalWidth) / 2;

            this.svg.selectAll('g')
                .data(this.dataset)
                .transition()
                .duration(this.animationDuration)
                .attr('transform', (d, i) => `translate(${leftMargin + i * (this.squareSize + this.padding)}, 0)`);

            this.svg.selectAll('rect')
                .data(this.dataset)
                .transition()
                .duration(this.animationDuration)
                .attr('fill', (d, i) => this.colors[i]);

            this.svg.selectAll('text')
                .data(this.dataset)
                .transition()
                .duration(this.animationDuration)
                .text(d => d);
        },
        async quickSort(arr, left, right) {
            if (left < right) {
                let pivotIndex = await this.partition(arr, left, right);
                await this.quickSort(arr, left, pivotIndex - 1);
                await this.quickSort(arr, pivotIndex + 1, right);
            }
        },
        async partition(arr, left, right) {
            let pivot = arr[right];
            let i = left - 1;
            for (let j = left; j < right; j++) {
                if (this.isPaused) {
                    await this.waitForResume();
                }
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    [this.colors[i], this.colors[j]] = [this.colors[j], this.colors[i]];
                    this.dataset = [...arr];
                    this.updateSquares();
                    await this.sleep(this.animationDuration);
                }
            }
            [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
            [this.colors[i + 1], this.colors[right]] = [this.colors[right], this.colors[i + 1]];
            this.dataset = [...arr];
            this.updateSquares();
            await this.sleep(this.animationDuration);
            return i + 1;
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        play() {
            if (!this.isPlaying) {
                this.isPlaying = true;
                this.quickSort(this.dataset, 0, this.dataset.length - 1).then(() => {
                    this.isPlaying = false;
                });
            }
            this.isPaused = false;
        },
        pause() {
            this.isPaused = true;
        },
        shuffle() {
            if (this.isPlaying) return;
            this.dataset = this.originalDataset
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
            this.generateColors();
            this.updateSquares();
        },
        waitForResume() {
            return new Promise(resolve => {
                const interval = setInterval(() => {
                    if (!this.isPaused) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 100);
            });
        }
    }
};
</script>

<style>
#quick-sort-visualizer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
}

.controls {
    margin-top: 20px;
}

button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>