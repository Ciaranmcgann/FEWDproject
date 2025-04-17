<script>
  import { onMount } from "svelte";

  let cart = [];
  let total = 0;
  let shipping = 0;

  onMount(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart = JSON.parse(storedCart); // This triggers reactivity
    }
  });

  function formatPrice(value) {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }

  // Calculate total only when cart changes
  $: total = cart
    .reduce((sum, item) => {
      const cleanPrice = Number(
        item.price.replace(/[€]/g, "").replace(/,/g, "")
      );
      return sum + (isNaN(cleanPrice) ? 0 : cleanPrice);
    }, 0)
    .toFixed(2);

  // Set shipping cost based on total
  $: shipping = total >= 100 ? 0 : 15; // Free shipping for orders over 100 EUR, else 15 EUR

  function handleCheckout() {
    alert("Proceeding to checkout...");
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    cart = [...cart]; // This triggers reactivity
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
                  <span>€{formatPrice(total)}</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center px-0"
                >
                  Shipping
                  <span>€{formatPrice(shipping)}</span>
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
                  <span
                    ><strong>€{formatPrice(Number(total) + shipping)}</strong
                    ></span
                  >
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
        <!-- Cart Items List -->
        <div class="col-md-8">
          <h4>Items in Cart</h4>
          <ul class="list-group">
            {#each cart as item, index}
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <button
                  class="btn btn-danger btn-sm"
                  on:click={() => removeFromCart(index)}>Remove</button
                >
                <div class="ml-auto">{item.name} - {item.price}</div>
              </li>
            {/each}
            <!-- Total at end of list -->
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <strong>Total:</strong>
              <strong>{formatPrice(Number(total) + shipping)}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>
