<script>
  import { onMount } from "svelte";

  let pianos = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      pianos = parsedData.pianos || [];
    }
  });

  function addToCart(pianos) {
    // Example logic
    console.log("Added to cart:", pianos);
  }
</script>

<main>
  <!-- Pianos section -->
  <section id="pianos" class="container my-5">
    <h2 class="text-center">Pianos</h2>
    <div class="row" id="piano-cards-container">
      {#each pianos as pianos}
        <div class="col-md-4">
          <div class="card">
            <img src={pianos.image} class="card-img-top" alt={pianos.name} />
            <div class="card-body">
              <h5 class="card-title">{pianos.name}</h5>
              <p class="card-text">{pianos.description}</p>
              <p class="card-price">Price: {pianos.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(pianos)}>Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer component -->
</main>
