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

  function addToCart(guitar) {
    // Add the instrument's essential data (name, price, id) to the cart
    cart = [
      ...cart,
      {
        id: guitar.id, // Assuming the instrument has an 'id' property
        name: guitar.name,
        price: guitar.price,
      },
    ];
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
  }
</script>

<main>
  <!-- Guitars section -->
  <section id="guitars" class="container my-5">
    <h2 class="text-center">Guitars</h2>
    <div class="row" id="guitar-cards-container">
      {#each guitars as guitar}
        <div class="col-md-4">
          <div class="card">
            <img src={guitar.image} class="card-img-top" alt={guitar.name} />
            <div class="card-body">
              <h5 class="card-title">{guitar.name}</h5>
              <p class="card-text">{guitar.description}</p>
              <p class="card-price">Price: {guitar.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(guitar)}>Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
