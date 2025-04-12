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
  <!-- section for map -->
  <div class="map-container">
    <div id="map"></div>
  </div>

  <div class="container mt-5 contact-form">
    <h2>Contact Us</h2>
    <form id="contact-form">
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <input type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Your Email</label>
        <input type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="4" required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  <!-- Footer component -->
  <Footer />
</main>
