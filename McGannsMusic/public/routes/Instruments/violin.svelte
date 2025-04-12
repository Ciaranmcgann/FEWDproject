<script>
  import Navbar from "../public/components/navbar.svelte";
  import Header from "../public/components/header.svelte";
  import Footer from "../public/components/footer.svelte";
</script>

<main>
  <!-- Navbar component -->
  <Navbar />

  <!-- Header component -->
  <Header />

  <!-- violin section -->
  <section id="violin" class="container my-5">
    <h2 class="text-center">Synthesisers</h2>
    <div class="row" id="violin-cards-container">
      <!-- Dynamic content will be inserted here -->
    </div>
  </section>

  <!-- Footer component -->
  <Footer />
</main>
