<script>
  import Navbar from "./components/navbar.svelte";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<main>
  <Navbar />
  <!-- Place Navbar component here -->
  <Header />
  <!-- Place Header component here -->
  <Router {routes} />
  <h1><a href="#/contact">Contact</a></h1>

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
