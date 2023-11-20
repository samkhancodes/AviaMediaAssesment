// Import necessary dependencies
import { createPinia, defineStore } from 'pinia';

// Create a Pinia store
const pinia = createPinia();

// Define your store
export const useMyStore = defineStore('MyStore', {
  // State (data)
  state: () => ({
    data: null, // Variable to store data
  }),

  // Actions
  actions: {
    // Action to fetch data from an API
    async fetchData() {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the response as JSON and update the data variable
        this.data = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});

// Export the store
export default pinia;
