<template>
  <div>
    <button @click="toggleChart">{{ showChart ? barChartBtn : lineChartBtn }}</button>
    <div v-if="showChart">
    <lineChart/>
    </div>
    <div v-else>
        <barChart :data="barchartData"/>
    </div>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script setup>
import barChart from './charts/barChart.vue'
import lineChart from './charts/lineChart.vue'
import {  ref } from 'vue';

const showChart = ref(false)
const barChartBtn = ref('Show Bar Chart')
const lineChartBtn = ref('Show Line Chart')

const toggleChart = () => {
  console.log('clicked')
  showChart.value = !showChart.value
};
    
</script>