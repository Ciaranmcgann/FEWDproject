<script>
  import Navbar from "../public/components/navbar.svelte";
  import Header from "../public/components/header.svelte";
  import Footer from "../public/components/footer.svelte";
</script>

<main>
  <Navbar />
  <!-- Place Navbar component here -->
  <Header />
  <!-- Place Header component here -->

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
