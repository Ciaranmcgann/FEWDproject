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

  <!-- recording equipment section -->
  <section id="recording-equipment" class="container my-5">
    <h2 class="text-center">Recording Equipment</h2>
    <div class="row" id="recording-equipment-cards-container">
      <!-- Dynamic content will be inserted here -->
    </div>
  </section>

  <!-- Footer component -->
  <Footer />
</main>
