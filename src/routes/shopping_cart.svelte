<script>
  import { onMount } from "svelte";

  let cart = [];

  onMount(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart = JSON.parse(storedCart);
    }
  });

  function calculateTotal() {
    return cart
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace("€", "").replace(",", "")),
        0
      )
      .toFixed(2);
  }

  function handleCheckout() {
    alert("Proceeding to checkout...");
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
</script>

<main>
  <section class="h-100 gradient-custom">
    <div class="container py-5">
      <div class="row">
        <!-- Cart Summary -->
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                >
                  Products
                  <span>€{calculateTotal()}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center px-0"
                >
                  Shipping
                  <span>Gratis</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                >
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>€{calculateTotal()}</strong></span>
                </li>
              </ul>
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block"
                on:click={handleCheckout}
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>

        <!-- Cart Items List -->
        <div class="col-md-8">
          <h4>Items in Cart</h4>
          <ul class="list-group">
            {#each cart as item, index}
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>{item.name} - {item.price}</div>
                <button
                  class="btn btn-danger btn-sm"
                  on:click={() => removeFromCart(index)}>Remove</button
                >
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .gradient-custom {
    background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  }
  .btn-primary {
    background-color: #2575fc;
  }
</style>
