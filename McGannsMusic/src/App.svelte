<script>
  import Navbar from "./components/navbar.svelte";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
  import "/style.css";
</script>

<main>
  <Navbar />
  <!-- Place Navbar component here -->
  <Header />
  <!-- Place Header component here -->
  <Router {routes} />

  <Footer />
  <!-- Place Footer component here -->
</main>
<!-- Footer template -->
