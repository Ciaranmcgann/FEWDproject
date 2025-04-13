<script>
  import Navbar from "./components/navbar.svelte";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Router {routes} />

<main>
  <Navbar />
  <!-- Place Navbar component here -->
  <Header />
  <!-- Place Header component here -->
  <h1><a href="#/contact">Contact</a></h1>
  <!-- Instruments -->
  <section id="instruments" class="container my-5">
    <h2 class="text-center">Featured Instruments</h2>
    <div class="row" id="instrument-cards-container">
      <!-- Dynamic content will be inserted here -->
    </div>
  </section>

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
