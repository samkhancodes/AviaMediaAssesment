<template>
  <div>
    <button @click="toggleChart">{{ showChart ? barChartBtn : lineChartBtn }}</button>
    <div v-if="showChart">
        <lineChart :data="barchartData"/>    
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
import {ref,onMounted} from 'vue'
import { useMyStore } from '../store/store';
const barchartData = ref(null)
onMounted(async () => {
  const myStore = useMyStore();
    await myStore.fetchDataset();
  
    barchartData.value = myStore.getDataset
})

const showChart = ref(false)
const barChartBtn = ref('Show Bar Chart')
const lineChartBtn = ref('Show Line Chart')

const toggleChart = () => {
  console.log('clicked')
  showChart.value = !showChart.value
};
    
</script>