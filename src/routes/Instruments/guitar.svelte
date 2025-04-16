<script>
  import { onMount } from "svelte";

  let guitars = [];

  onMount(() => {
    fetch("/FEWDproject/public/instruments.json")
      .then((response) => response.json())
      .then((data) => {
        guitars = data;
      });
  });
</script>

<main>
  <!-- Guitars section -->
  <section id="guitars" class="container my-5">
    <h2 class="text-center">Guitars</h2>
    <div class="row" id="guitar-cards-container">
      <!-- Dynamic content will be inserted here -->
    </div>
  </section>
</main>
