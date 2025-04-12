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

  <!-- Pianos section -->
  <section id="piano" class="container my-5">
    <h2 class="text-center">Piano</h2>
    <div class="row" id="piano-cards-container">
      <!-- Dynamic content will be inserted here -->
    </div>
  </section>

  <!-- Footer component -->
  <Footer />
</main>
