<script>
  import Navbar from "../components/navbar.svelte";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";

  import { onMount } from "svelte";
  import L from "leaflet";

  onMount(() => {
    // Initialize the map
    const map = L.map("map").setView([53.34399, -6.24856], 12);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker for McGann's Music location
    L.marker([53.3431, -6.2626])
      .addTo(map)
      .bindPopup("McGann's Music Shop")
      .openPopup();
  });
</script>

<main>
  <div class="map-container">
    <div id="map"></div>
  </div>

  <div class="container mt-5 contact-form">
    <h2>Contact Us</h2>
    <form id="contact-form">
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <input type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Your Email</label>
        <input type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="4" required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</main>

<style>
  /* Ensure the map container has a proper height */
  .map-container {
    /* Adjust the height of the map container */
    height: 400px; /* Change this value as needed */
    width: 100%; /* Responsive map */
  }

  /* Optional: Add margin to the contact form */
  .container.contact-form {
    margin-top: 30px;
  }
</style>
