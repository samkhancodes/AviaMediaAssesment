<template>
    <div>
      <h1>Line Chart</h1>
      <div ref="chart"></div>
    </div>
  </template>
  
  <script setup>
  import * as d3 from 'd3';
  import { ref, watch } from 'vue';
  const props = defineProps(['data']);
  
  const chart = ref(null);
  
  const updateChart = (data) => {
    if (data) {
      const width = 928;
      const height = 500;
      const marginTop = 30;
      const marginRight = 0;
      const marginBottom = 30;
      const marginLeft = 40;
  
      // X scale
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.ytd_enrollment_avg_)) // Replace 'xValue' with your actual x-axis property
        .range([marginLeft, width - marginRight])
        .padding(0.1);
  
      // Y scale
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.ytd_attendance_avg_)]) // Replace 'yValue' with your actual y-axis property
        .range([height - marginBottom, marginTop]);
  
      // Create SVG container
      const svg = d3
        .select(chart.value)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height])
        .style('max-width', '100%')
        .style('height', 'auto');
  
      // Add line
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2)
        .attr(
          'd',
          d3
            .line()
            .x((d) => x(d.ytd_enrollment_avg_))
            .y((d) => y(d.ytd_attendance_avg_))
        );
  
      // Add x-axis and label
      svg
        .append('g')
        .attr('transform', `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));
  
      // Add y-axis and label, and remove domain line
      svg
        .append('g')
        .attr('transform', `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
        .call((g) => g.select('.domain').remove())
        .call((g) =>
          g
            .append('text')
            .attr('x', -marginLeft)
            .attr('y', 10)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'start')
            .text('↑ Frequency (%)')
        );
    }
  };
  
  watch(() => props.data, (newData) => {
    updateChart(newData);
  });
  </script>
  