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

// search form
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

// Instrument array made of objects for each instrument
const instruments = [
  {
    name: "Guitars",
    description: "Electric/Acoustic Guitars",
    image: "https://images.guitarguitar.co.uk/cdn/small/160/753_gg_vintage23_lp1.jpg",
    target: "pages/Instruments/guitars.html"
  },
  {
    name: "Piano",
    description: "Upright Pianos",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Steinway_Vienna_002.JPG",
    target: "pages/Instruments/piano.html"
  },
  {
    name: "Drums",
    description: "Discover top-quality drum kits and percussion instruments.",
    image: "https://assets.xlnaudio.com/pages/addictive_drums/2.5/dream-kit-bg-with-transition-1352px-2x.jpg",
    target: "pages/Instruments/drums.html"
  },
  {
    name: "Violin",
    description: "Acoustic Violins for classical and contemporary music.",
    image: "https://www.corilon.com/media/image/f8/e5/22/peter-hornsteiner-5377-1a_1890x1890.jpg",
    target: "pages/Instruments/violin.html"
  },
  {
    name: "Synthesisers",
    description: "Explore analog and digital synthesisers for creating unique sounds.",
    image: "https://api.moogmusic.com/sites/default/files/styles/large_key/public/key_image/2022-11/Minimoog_Model_D_Website-5.jpg?itok=AEvGT6_I",
    target: "pages/Instruments/synthesisers.html"
  },
  {
    name: "Recording Equipment",
    description: "High-quality microphones, mixers, and studio gear for professional recordings.",
    image: "https://sordan.ie/uploaded/photos/5435/1.jpg",
    target: "pages/Instruments/recording_equipment.html"
  },
  {
    name: "Other Instruments", // added this as a test to see if works
    description: "Discover more instruments and accessories.",
    image: "https://promova.com/content/instrumentos_musicales_1b472dd62d.png",
    target: "pages/Instruments/recording_equipment.html"
  }
];

// Function to create instrument cards dynamically
function generateInstrumentCards() {
  const container = document.getElementById("instrument-cards-container");
  container.innerHTML = ""; // Clear existing content before appending new items

  instruments.forEach(instrument => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-md-4", "clickPage");
    colDiv.setAttribute("data-target", instrument.target);

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

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
    window.location.href = target.getAttribute("data-target");
  }
});

// Call the function to generate the cards on page load
generateInstrumentCards();