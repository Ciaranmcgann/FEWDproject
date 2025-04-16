<script>
  import { onMount } from "svelte";

  let violin = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      violin = parsedData.violin || [];
    }
  });

  function addToCart(violin) {
    // Example logic
    console.log("Added to cart:", violin);
  }
</script>

<main>
  <!-- Violins section -->
  <section id="violins" class="container my-5">
    <h2 class="text-center">Violins</h2>
    <div class="row" id="violin-cards-container">
      {#each violins as violin}
        <div class="col-md-4">
          <div class="card">
            <img src={violin.image} class="card-img-top" alt={violin.name} />
            <div class="card-body">
              <h5 class="card-title">{violin.name}</h5>
              <p class="card-text">{violin.description}</p>
              <p class="card-price">Price: {violin.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(violin)}>Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
