function loadHTML(elementId, file) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load components on every page
document.addEventListener("DOMContentLoaded", function () {
  loadHTML("navbar", "page_templates/navbar.html");
  loadHTML("header", "page_templates/header.html");
  loadHTML("footer", "page_templates/footer.html");
});