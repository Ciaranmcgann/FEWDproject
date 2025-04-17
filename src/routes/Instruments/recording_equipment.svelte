<script>
  import { onMount } from "svelte";

  let recordingEquipment = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      recordingEquipment = parsedData.recordingEquipment || [];
    }
  });

  // add to cart

  function addToCart(recordingEquipment) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: recordingEquipment.id,
      name: recordingEquipment.name,
      price: recordingEquipment.price,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${recordingEquipment.name} added to cart!`);
  }
</script>

<main>
  <!-- Recording Equipment section -->
  <section id="recording-equipment" class="container my-5">
    <h2 class="text-center">Recording Equipment</h2>
    <div class="row" id="recording-cards-container">
      {#each recordingEquipment as recordingEquipment}
        <div class="col-md-4">
          <div class="card">
            <img
              src={recordingEquipment.image}
              class="card-img-top"
              alt={recordingEquipment.name}
            />
            <div class="card-body">
              <h5 class="card-title">{recordingEquipment.name}</h5>
              <p class="card-text">{recordingEquipment.description}</p>
              <p class="card-price">Price: {recordingEquipment.price}</p>
              <button
                class="btn btn-primary add-to-cart"
                on:click={() => addToCart(recordingEquipment)}
                >Add to Cart</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
