<script>
<<<<<<< HEAD
=======
  import Navbar from "../components/navbar.svelte";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
>>>>>>> svelte_debug
</script>

<main>
  <script>
    import { onMount } from "svelte";
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";

    onMount(() => {
      const map = L.map("map").setView([53.34399, -6.24856], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      L.marker([53.3431, -6.2626])
        .addTo(map)
        .bindPopup("McGann's Music Shop")
        .openPopup();
    });
  </script>
  <!-- Navbar component -->
  <Navbar />

  <!-- Header component -->
  <Header />
  <!-- section for map -->
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

  <!-- Footer component -->
  <Footer />
</main>
