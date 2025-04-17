<script>
  import { onMount } from "svelte";

  let drums = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      drums = parsedData.drums || [];
    }
  });

  // add to cart function
  function addToCart(drums) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: drums.id,
      name: drums.name,
      price: drums.price,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${drums.name} added to cart!`);
  }
</script>

<main>
  <!-- Drums section -->
  <section id="drums" class="container my-5">
    <h2 class="text-center">Drums</h2>
    <div class="row" id="drum-cards-container">
      {#each drums as drum}
        <div class="col-md-4">
          <div class="card">
            <img src={drum.image} class="card-img-top" alt={drum.name} />
            <div class="card-body">
              <h5 class="card-title">{drum.name}</h5>
              <p class="card-text">{drum.description}</p>
              <p class="card-price">Price: {drum.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(drum)}>Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer component -->
</main>
