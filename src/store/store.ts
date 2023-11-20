import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();

export const useMyStore = defineStore('MyStore', {
  state: () => ({
    data: null,
  }),
  getters: {
    getDataset() {
      return this.data;
    },
  },
  actions: {
    async fetchDataset() {
      const apiUrl = import.meta.env.VITE_API_BASE_URL; 
      try {
        const response = await fetch(
          `${apiUrl}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch dataset');
        }

        this.data = await response.json();
      } catch (error) {
        console.error('Error fetching dataset:', error);
      }
    },
  },
});

export default pinia;
