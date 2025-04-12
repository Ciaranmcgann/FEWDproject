import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')
});

export default app; // pushes app.svelte to the index file

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




function generateInstrumentCards(type = "all") {
  // Get the container based on the type (guitar, drums, piano, synthesisers, or recording equipment)
  let container;
  if (type === "guitar") {
    container = document.getElementById("guitar-cards-container");
  } else if (type === "drums") {
    container = document.getElementById("drum-cards-container");
  } else if (type === "piano") {
    container = document.getElementById("piano-cards-container");
  } else if (type === "synthesisers") {
    container = document.getElementById("synthesisers-cards-container");
  } else if (type === "recordingEquipment") {
    container = document.getElementById("recording-equipment-cards-container");
  } else if (type === "violin") {
    container = document.getElementById("violin-cards-container");
  } else {
    container = document.getElementById("instrument-cards-container"); // Default container for all instruments
  }

  // If the container is not found, log an error
  if (!container) {
    console.error(`${type} cards container not found!`);
    return;
  }

  container.innerHTML = ""; // Clear existing content before appending new items

  // Fetching data from instrument json file
  fetch('/src/library/instrument_data/instruments.json')
    .then(response => response.json())
    .then(jsonData => {
      let data;
      if (type === "guitar") {
        data = jsonData.guitars;
      } else if (type === "drums") {
        data = jsonData.drums;
      } else if (type === "piano") {
        data = jsonData.pianos;
      } else if (type === "synthesisers") {
        data = jsonData.synthesisers;
      } else if (type === "recordingEquipment") {
        data = jsonData.recordingEquipment;
      } else if (type === "violin") {
        data = jsonData.violins;
      } else {
        data = jsonData.instruments; // For "all"
      }

      // Check if data is defined and an array
      if (Array.isArray(data)) {
        // Create and append cards for each instrument
        data.forEach(instrument => {
          const colDiv = document.createElement("div");
          colDiv.classList.add("col-md-4");

          const cardDiv = document.createElement("div");
          cardDiv.classList.add("card");

          // only homepage instrument cards direct to next page
          if (type === "all") {
            cardDiv.classList.add("clickPage");
            cardDiv.setAttribute("data-target", instrument.target);
          }

          const imgElement = document.createElement("img");
          imgElement.src = instrument.image;
          imgElement.classList.add("card-img-top");
          imgElement.alt = instrument.name;

          const cardBodyDiv = document.createElement("div");
          cardBodyDiv.classList.add("card-body");

          const titleElement = document.createElement("h5");
          titleElement.classList.add("card-title");
          titleElement.innerText = instrument.name;

          const textElement = document.createElement("p");
          textElement.classList.add("card-text");
          textElement.innerText = instrument.description;

          // exclude price and add to cart button from home page
          if (type !== "all") {
            const addToCartButton = document.createElement("button"); // add to cart button added to div
            addToCartButton.classList.add("btn", "btn-primary", "add-to-cart");
            addToCartButton.innerText = "Add to Cart";

            const priceElement = document.createElement("p");  // Added price element
            priceElement.classList.add("card-price");
            priceElement.innerText = `Price: ${instrument.price}`;

            cardBodyDiv.appendChild(titleElement);
            cardBodyDiv.appendChild(textElement);
            cardBodyDiv.appendChild(priceElement);
            cardBodyDiv.appendChild(addToCartButton);
          } else {
            cardBodyDiv.appendChild(titleElement);
            cardBodyDiv.appendChild(textElement);
          }

          cardDiv.appendChild(imgElement);
          cardDiv.appendChild(cardBodyDiv);
          colDiv.appendChild(cardDiv);
          container.appendChild(colDiv);
        });
      } else {
        console.error('Invalid or empty data received.');
      }
    })
    .catch(error => {
      console.error('Error loading the JSON data:', error);
    });
}

// Event delegation for dynamically added elements
document.addEventListener("click", function(event) {
  const target = event.target.closest(".clickPage");
  if (target) {
    const targetPage = target.getAttribute("data-target");
    window.location.assign(targetPage);
  }
});

// Call the function to generate the instrument cards on page load (check the current page)
if (window.location.pathname.includes("guitars.html")) {
  generateInstrumentCards("guitar");
} else if (window.location.pathname.includes("drums.html")) {
  generateInstrumentCards("drums");
} else if (window.location.pathname.includes("piano.html")) {
  generateInstrumentCards("piano");
} else if (window.location.pathname.includes("synthesisers.html")) {
  generateInstrumentCards("synthesisers");
} else if (window.location.pathname.includes("recording_equipment.html")) {
  generateInstrumentCards("recordingEquipment");
} else if (window.location.pathname.includes("violin.html")) {
  generateInstrumentCards("violin");
} else {
  generateInstrumentCards("all");
}
