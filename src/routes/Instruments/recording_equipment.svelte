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

  function addToCart(recordingEquipment) {
    // Example logic
    console.log("Added to cart:", recordingEquipment);
  }
</script>

<main>
  <!-- Recording Equipment section -->
  <section id="recording-equipment" class="container my-5">
    <h2 class="text-center">Recording Equipment</h2>
    <div class="row" id="recording-cards-container">
      {#each recordingEquipment as recordingEquipmentt}
        <div class="col-md-4">
          <div class="card">
            <img
              src={recordingEquipment.image}
              class="card-img-top"
              alt={recordingEquipmentt.name}
            />
            <div class="card-body">
              <h5 class="card-title">{recordingEquipment.name}</h5>
              <p class="card-text">{recordingEquipment.description}</p>
              <p class="card-price">Price: {recordingEquipmentt.price}</p>
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
