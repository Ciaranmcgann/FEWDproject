console.log("script.js loaded!"); // to see if script is connected to htmls

// clicks to new page for instrument divs on homepage 

// Entry function that will initialize the cards based on hash or default to "all"
export function initCards(type = "all") {
  // Check for the container and initialize once it's available
  waitForContainer("instrument-cards-container", () => {
    // Initialize the cards based on the current hash
    const hash = window.location.hash;
    generateCardsFromHash(hash);  // Generate cards based on current hash

    // Listen for changes in the hash and update cards accordingly
    setupHashChangeListener();
  });
}

// Wait until the container element is available in the DOM before proceeding
function waitForContainer(id, callback) {
  const el = document.getElementById(id);
  if (el) {
    callback();
  } else {
    requestAnimationFrame(() => waitForContainer(id, callback));  // Retry until the element is found
  }
}

// Generate cards based on the current URL hash
function generateCardsFromHash(hash) {
  if (hash.includes("/Instruments/guitar")) {
    generateInstrumentCards("guitar");
  } else if (hash.includes("/Instruments/drums")) {
    generateInstrumentCards("drums");
  } else if (hash.includes("/Instruments/piano")) {
    generateInstrumentCards("piano");
  } else if (hash.includes("/Instruments/synthesisers")) {
    generateInstrumentCards("synthesisers");
  } else if (hash.includes("/Instruments/recording_equipment")) {
    generateInstrumentCards("recordingEquipment");
  } else if (hash.includes("/Instruments/violin")) {
    generateInstrumentCards("violin");
  } else {
    generateInstrumentCards("all");  // Default to "all" if no match
  }
}

// Setup event listener for hash changes (for navigating between different categories)
function setupHashChangeListener() {
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash;
    generateCardsFromHash(hash);  // Generate cards based on the new hash
  });
}

// Generate the instrument cards based on the type
function generateInstrumentCards(type = "all") {
  let container;
  switch (type) {
    case "guitar":
      container = document.getElementById("guitar-cards-container");
      break;
    case "drums":
      container = document.getElementById("drum-cards-container");
      break;
    case "piano":
      container = document.getElementById("piano-cards-container");
      break;
    case "synthesisers":
      container = document.getElementById("synthesisers-cards-container");
      break;
    case "recordingEquipment":
      container = document.getElementById("recording-equipment-cards-container");
      break;
    case "violin":
      container = document.getElementById("violin-cards-container");
      break;
    default:
      container = document.getElementById("instrument-cards-container");
  }

  if (!container) {
    console.error(`${type} cards container not found!`);
    return;
  }

  container.innerHTML = "";  // Clear any existing cards

  // Fetch data from the JSON file
  fetch('/FEWDproject/public/instruments.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(jsonData => {
      let data;
      switch (type) {
        case "guitar": data = jsonData.guitars; break;
        case "drums": data = jsonData.drums; break;
        case "piano": data = jsonData.pianos; break;
        case "synthesisers": data = jsonData.synthesisers; break;
        case "recordingEquipment": data = jsonData.recordingEquipment; break;
        case "violin": data = jsonData.violins; break;
        default: data = jsonData.instruments;
      }

      if (!Array.isArray(data)) {
        console.error('Invalid or empty data received.');
        return;
      }

      // Create and append cards for each instrument
      data.forEach(instrument => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

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

        cardBodyDiv.appendChild(titleElement);
        cardBodyDiv.appendChild(textElement);

        if (type !== "all") {
          const priceElement = document.createElement("p");
          priceElement.classList.add("card-price");
          priceElement.innerText = `Price: ${instrument.price}`;

          const addToCartButton = document.createElement("button");
          addToCartButton.classList.add("btn", "btn-primary", "add-to-cart");
          addToCartButton.innerText = "Add to Cart";

          cardBodyDiv.appendChild(priceElement);
          cardBodyDiv.appendChild(addToCartButton);
        }

        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
      });

      setupClickListeners();  // Re-add click listeners after content is loaded
    })
    .catch(error => {
      console.error('Error loading the JSON data:', error);
    });
}

// Set up click listeners for dynamically generated cards
function setupClickListeners() {
  document.querySelectorAll(".clickPage").forEach(div => {
    div.addEventListener("click", function () {
      const targetPage = div.getAttribute("data-target");
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });
}


