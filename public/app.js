// RemoVision Dashboard Application

(function() {
  'use strict';

  const API_BASE = '/api';

  async function init() {
    console.log('RemoVision Dashboard v0.1 Initializing...');
    
    try {
      const response = await fetch(`${API_BASE}`);
      const data = await response.json();
      console.log('API Response:', data);
      
      updateDashboard(data);
    } catch (error) {
      console.error('Failed to initialize dashboard:', error);
    }
  }

  function updateDashboard(data) {
    const statusElement = document.querySelector('#status');
    if (statusElement) {
      console.log('Dashboard updated');
    }
  }

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', init);
})();
