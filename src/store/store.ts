import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();

export const useMyStore = defineStore('MyStore', {
  state: () => ({
    data: null,
  }),

  actions: {
    async fetchDataset() {
      const apiKey = import.meta.env.VITE_KAGGLE_API; 
      const datasetSlug = import.meta.env.VITE_KAGGLE_USERNAME;
      try {
        const response = await fetch(
          `https://www.kaggle.com/api/v1/datasets/download/${datasetSlug}?key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch dataset');
        }

        this.dataset = await response.json();
        console.log(this.dataset);
      } catch (error) {
        console.error('Error fetching dataset:', error);
      }
    },
  },
});

export default pinia;
