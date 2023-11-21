<template>
  <div>
    <barChart :data="barchartData"/>
    <lineChart :data="barchartData"/>
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
</script>