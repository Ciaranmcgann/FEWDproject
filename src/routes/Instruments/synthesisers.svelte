<script>
  import { onMount } from "svelte";

  let synthesisers = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      synthesisers = parsedData.synthesisers || [];
    }
  });
  // add to cart

  function addToCart(synthesisers) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: synthesisers.id,
      name: synthesisers.name,
      price: synthesisers.price,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${synthesisers.name} added to cart!`);
  }
</script>

<main>
  <!-- Synthesisers section -->
  <section id="synthesisers" class="container my-5">
    <h2 class="text-center">Synthesisers</h2>
    <div class="row" id="synth-cards-container">
      {#each synthesisers as synth}
        <div class="col-md-4">
          <div class="card">
            <img src={synth.image} class="card-img-top" alt={synth.name} />
            <div class="card-body">
              <h5 class="card-title">{synth.name}</h5>
              <p class="card-text">{synth.description}</p>
              <p class="card-price">Price: {synth.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(synth)}>Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
