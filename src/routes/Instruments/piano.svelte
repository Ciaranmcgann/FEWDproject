<script>
  import { onMount } from "svelte";

  let piano = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      piano = parsedData.piano || [];
    }
  });

  function addToCart(piano) {
    // Example logic
    console.log("Added to cart:", piano);
  }
</script>

<main>
  <!-- Pianos section -->
  <section id="pianos" class="container my-5">
    <h2 class="text-center">Pianos</h2>
    <div class="row" id="piano-cards-container">
      {#each pianos as piano}
        <div class="col-md-4">
          <div class="card">
            <img src={piano.image} class="card-img-top" alt={piano.name} />
            <div class="card-body">
              <h5 class="card-title">{piano.name}</h5>
              <p class="card-text">{piano.description}</p>
              <p class="card-price">Price: {piano.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(piano)}>Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer component -->
</main>
