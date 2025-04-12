<script>
  import { onMount } from "svelte";
  import { Router } from "svelte-spa-router"; // Import the route store from svelte-spa-router
  import {
    instruments,
    instrumentType,
    fetchInstruments,
    updateInstrumentType,
  } from "./main.js"; // Import functions and variables

  let currentRoute;

  // Subscribe to the route store to track the current route
  $: {
    currentRoute = $route;
    updateInstrumentType(currentRoute); // Update instrument type whenever the route changes
    fetchInstruments(); // Fetch new instruments based on updated instrumentType
  }
</script>

<main>
  <Navbar />
  <!-- Place Navbar component here -->
  <Header />
  <!-- Place Header component here -->

  <!-- Instruments -->

  <h1>Instruments</h1>
  <div class="row">
    {#each instruments as instrument}
      <div class="col-md-4">
        <div class="card">
          <img
            src={instrument.image}
            alt={instrument.name}
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{instrument.name}</h5>
            <p class="card-text">{instrument.description}</p>
            <p class="card-price">Price: {instrument.price}</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Contact section-->

  <section id="contact" class="bg-light py-5">
    <div class="container text-center">
      <h2>Contact Us</h2>
      <p>
        Email: <strong>contact@mcgannsmusic.com </strong> <br />
        Phone: <strong>+353 85 555 5555</strong> <br />
        Address: <strong>29 Exchequer St, Dublin 2, D02 X310</strong>
      </p>
    </div>
  </section>

  <Footer />
  <!-- Place Footer component here -->
</main>
<!-- Footer template -->
