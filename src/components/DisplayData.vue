<template>
  <div>
    <barChart/>
    <lineChart/>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script setup>
import barChart from './charts/barChart.vue'
import lineChart from './charts/lineChart.vue'
</script>