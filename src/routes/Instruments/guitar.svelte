<script>
  import { onMount } from "svelte";

  let guitars = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      guitars = parsedData.guitars || [];
    }
  });

  function addToCart(guitars) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: guitars.id,
      name: guitars.name,
      price: guitars.price,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${guitars.name} added to cart!`);
  }
</script>

<main>
  <!-- Guitars section -->
  <section id="guitars" class="container my-5">
    <h2 class="text-center">Guitars</h2>
    <div class="row" id="guitar-cards-container">
      {#each guitars as guitars}
        <div class="col-md-4">
          <div class="card">
            <img src={guitars.image} class="card-img-top" alt={guitars.name} />
            <div class="card-body">
              <h5 class="card-title">{guitars.name}</h5>
              <p class="card-text">{guitars.description}</p>
              <p class="card-price">Price: {guitars.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(guitas)}>Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
