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

  <!-- Guitars section -->
  <section id="guitars" class="container my-5">
    <h2 class="text-center">Guitars</h2>
    <div class="row" id="guitar-cards-container">
      <!-- Dynamic content will be inserted here -->
    </div>
  </section>

  <!-- Footer component -->
  <Footer />
</main>
