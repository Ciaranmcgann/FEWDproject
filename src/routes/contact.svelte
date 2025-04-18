<script>
  import Navbar from "../components/navbar.svelte";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import { sendEmail } from "../mailAPI.js";

  import { onMount } from "svelte";
  import L from "leaflet";

  let nameInput;
  let emailInput;
  let messageInput;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendEmail(nameInput, emailInput, messageInput);
  }; // Mail API function triggered by clicking submit

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
    <form id="contact-form" on:submit={handleSubmit}>
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <input
          bind:this={nameInput}
          type="text"
          class="form-control"
          id="name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Your Email</label>
        <input
          bind:this={emailInput}
          type="email"
          class="form-control"
          id="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          bind:this={messageInput}
          class="form-control"
          id="message"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  <section id="contact" class="bg-light py-5">
    <div class="container text-center">
      <h2>Contact Us</h2>
      <p>
        Email: <strong>contact@mcgannsmusic.com</strong> <br />
        Phone: <strong>+353 85 555 5555</strong> <br />
        Address: <strong>29 Exchequer St, Dublin 2, D02 X310</strong>
      </p>
    </div>
  </section>
</main>
