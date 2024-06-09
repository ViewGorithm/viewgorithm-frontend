<template>
    <div id="app">
        <button @click="visualizeBubbleSort">버블 정렬 시각화</button>
        <svg ref="bubbleSortSvg"></svg>
    </div>
</template>

<script>
import * as d3 from 'd3';

export default {
    name: 'App',
    data() {
        return {
            data: this.generateRandomData(10, 50),
            width: 700,
            height: 400
        }
    },
    methods: {
        visualizeBubbleSort() {
            this.bubbleSort(this.data);
            this.drawBars(this.data);
        },
        async bubbleSort(arr) {
            const n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        // 스와핑
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        this.drawBars(arr);
                        await this.delay(500);
                    }
                }
            }
        },
        drawBars(data) {
            const svg = d3.select(this.$refs.bubbleSortSvg);
            svg.selectAll('*').remove(); // 기존 요소 제거

            const x = d3.scaleLinear()
                .range([0, this.width])
                .domain([0, data.length - 1]);

            const y = d3.scaleLinear()
                .range([this.height, 0])
                .domain([0, Math.max(...data)]);

            svg.attr('width', this.width)
                .attr('height', this.height);

            const bars = svg.selectAll('rect')
                .data(data)
                .enter().append('rect')
                .attr('x', (d, i) => x(i))
                .attr('width', this.width / data.length)
                .attr('y', d => y(d))
                .attr('height', d => this.height - y(d))
                .attr('fill', 'steelblue');

            // 값 텍스트 추가
            bars.append('text')
                .attr('x', (d, i) => x(i) + (this.width / data.length) / 2)
                .attr('y', d => y(d) - 10)
                .attr('text-anchor', 'middle')
                .attr('font-size', '12px')
                .attr('fill', 'white')
                .text(d => d);
        },
        generateRandomData(count, max) {
            const data = [];
            for (let i = 0; i < count; i++) {
                data.push(Math.floor(Math.random() * max));
            }
            return data;
        },
        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
}
</script>