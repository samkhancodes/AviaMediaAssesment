 <template>
    <div>
       <h1>data</h1>
       <div ref="chart"></div>
        <router-link to="/">Back</router-link>
    </div>
</template>

<script>
import * as d3 from 'd3'
export default {

mounted() {
    // Sample data
    const data = [10, 20, 30, 40, 50];

    // Create a simple bar chart using D3.js
    const svg = d3
      .select(this.$refs.chart)
      .append('svg')
      .attr('width', 400)
      .attr('height', 200);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 80)
      .attr('y', d => 200 - d)
      .attr('width', 70)
      .attr('height', d => d)
      .attr('fill', 'blue');
  },
}
</script> 