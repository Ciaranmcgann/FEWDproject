<script>
  import Navbar from "./library/components/navbar.svelte";
  import Header from "./library/components/header.svelte";
  import Footer from "./library/components/footer.svelte";
</script>

<main>
  <!-- Navbar component -->
  <Navbar />

  <!-- Header component -->
  <Header />

  <!-- synthesisers section -->
  <section id="synthesisers" class="container my-5">
    <h2 class="text-center">Synthesisers</h2>
    <div class="row" id="synthesisers-cards-container">
      <!-- Dynamic content will be inserted here -->
    </div>
  </section>

  <!-- Footer component -->
  <Footer />
</main>
