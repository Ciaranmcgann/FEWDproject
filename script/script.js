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

// Open street map script

  document.addEventListener("DOMContentLoaded", function () {
    // sets view of map to dublin
    var map = L.map('map').setView([53.34399, -6.24856], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // marker for McGann's Music location
    L.marker([53.3431, -6.2626]).addTo(map)
        .bindPopup("McGann's Music Shop")
        .openPopup();
});





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

  // Determine the data to use based on the type
  let data;
  if (type === "guitar") {
    data = guitars;
  } else if (type === "drums") {
    data = drums;
  } else if (type === "piano") {
    data = pianos;
  } else if (type === "synthesisers") {
    data = synthesisers;
  } else if (type === "recordingEquipment") {
    data = recordingEquipment;
  } else if (type === "violin") {
    data = violins;
  } else {
    data = instruments; // Default data for all instruments
  }

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
