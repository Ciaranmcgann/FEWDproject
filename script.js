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

