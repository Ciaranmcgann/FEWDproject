<script>
  import { onMount } from "svelte";

  let violins = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      violins = parsedData.violins || [];
    }
  });

  function addToCart(violins) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: violins.id,
      name: violins.name,
      price: violins.price,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${violins.name} added to cart!`);
  }
</script>

<main>
  <!-- Violins section -->
  <section id="violins" class="container my-5">
    <h2 class="text-center">Violins</h2>
    <div class="row" id="violin-cards-container">
      {#each violins as violins}
        <div class="col-md-4">
          <div class="card">
            <img src={violins.image} class="card-img-top" alt={violins.name} />
            <div class="card-body">
              <h5 class="card-title">{violins.name}</h5>
              <p class="card-text">{violins.description}</p>
              <p class="card-price">Price: {violins.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(violins)}>Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
