<script>
  import Navbar from "../../components/navbar.svelte";
  import Header from "../../components/header.svelte";
  import Footer from "../../components/footer.svelte";
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
