<template>
  <div>
    <h1>Bar Chart</h1>
    <div ref="chart"></div>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script setup>
import * as d3 from 'd3';
import { onMounted } from 'vue';
import { useMyStore } from '../store/store.ts';
import { ref } from 'vue';

const chartRef = ref(null);

onMounted(async () => {
  const myStore = useMyStore();
  await myStore.fetchDataset();

  const data = myStore.getDataset
  console.log(data);

 
  const svg = d3
    .select(chartRef.value)
    .append('svg')
    .attr('width', 400)
    .attr('height', 200);

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 80)
    .attr('y', (d) => 200 - parseFloat(d.ytd_attendance_avg_))
    .attr('width', 70)
    .attr('height', (d) => parseFloat(d.ytd_attendance_avg_))
    .attr('fill', 'blue');
});
</script>
