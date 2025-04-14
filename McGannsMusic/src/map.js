// Open street map script
import { onMount } from 'svelte';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  onMount(() => {
    // Initialize the map
    const map = L.map('map').setView([53.34399, -6.24856], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker for McGann's Music location
    L.marker([53.3431, -6.2626]).addTo(map)
      .bindPopup("McGann's Music Shop")
      .openPopup();
  });

