import { Router } from 'svelte-spa-router';

import App from './App.svelte';                           // Home 
import Contact from './routes/contact.svelte';            // Contact page
import ShoppingCart from './routes/shopping_cart.svelte'; // Shopping cart page
import Guitars from './routes/Instruments/guitar.svelte';       // Guitars page
import Piano from './routes/Instruments/piano.svelte';         // Piano page
import Violin from './routes/Instruments/violin.svelte';       // Violin page
import Drums from './routes/Instruments/drums.svelte';         // Drums page
import Synthesisers from './routes/Instruments/synthesisers.svelte'; // Synthesizers page
import RecordingEquipment from './routes/Instruments/recording_equipment.svelte'; // Recording equipment page

// Define routes
const routes = {
  '': App,                                              // Default route (home)
  '/contact': Contact,                                  // Contact page
  '/shoppingcart': ShoppingCart,                        // Shopping cart page
  '/guitars': Guitars,                                  // Guitars page
  '/piano': Piano,                                      // Piano page
  '/violin': Violin,                                    // Violin page
  '/drums': Drums,                                      // Drums & Percussion page
  '/synthesisers': Synthesisers,                        // Synthesizers page
  '/recording_equipment': RecordingEquipment            // Recording equipment page
};

// Set up the router
const app = new Router({
  target: document.getElementById('app'),  // Mount the router to the DOM element with id="app"
  routes, // Pass in the routes
});

console.log("script.js loaded!"); // to see if script is connected to htmls

// clicks to new page for instrument divs on homepage 
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".clickPage").forEach(div => {
      div.addEventListener("click", function () {
          const targetPage = div.getAttribute("data-target");
          if (targetPage) {
              window.location.href = targetPage;
          }
      });
  });
});

// search form ( not working yet )
function searchFunction() {
  var x = document.getElementById("searchInput").value;

  if (x === "guitar"){
    window.open
  }
}

export let instruments = [];
export let instrumentType = 'all'; // Default type

// Fetch instruments based on the current instrumentType
export async function fetchInstruments() {
  try {
    const res = await fetch('/src/instruments.json');
    const jsonData = await res.json();
    instruments = jsonData[instrumentType] || jsonData.instruments; // Fallback to all instruments if no specific type
  } catch (error) {
    console.error('Error loading instruments:', error);
  }
}

// Function to update instrumentType based on route
export function updateInstrumentType(currentRoute) {
  if (currentRoute === '/guitars') {
    instrumentType = 'guitars';
  } else if (currentRoute === '/drums') {
    instrumentType = 'drums';
  } else if (currentRoute === '/piano') {
    instrumentType = 'pianos';
  } else if (currentRoute === '/synthesisers') {
    instrumentType = 'synthesisers';
  } else if (currentRoute === '/recording_equipment') {
    instrumentType = 'recordingEquipment';
  } else if (currentRoute === '/violin') {
    instrumentType = 'violins';
  } else {
    instrumentType = 'all'; // Default to 'all' if no match
  }
}
