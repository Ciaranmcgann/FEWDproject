<script>
  import { onMount } from "svelte";
  let instruments = [];

  onMount(() => {
    const storedData = localStorage.getItem("musicStoreData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      instruments = parsedData.instruments || [];
    }
  });

  function handleCardClick(target) {
    window.location.href = target;
  }
</script>

<main>
  <!-- Instruments -->
  <section id="instruments" class="container my-5">
    <div id="instrument-cards-container">
      <div class="row">
        {#each instruments as instrument}
          <div
            class="col-md-4 clickPage"
            on:click={() => handleCardClick(instrument.target)}
          >
            <div class="card">
              <img
                src={instrument.image}
                class="card-img-top"
                alt={instrument.name}
              />
              <div class="card-body">
                <h5 class="card-title">{instrument.name}</h5>
                <p class="card-text">{instrument.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact section-->

  <section id="contact" class="bg-light py-5">
    <div class="container text-center">
      <h2>Contact Us</h2>
      <p>
        Email: <strong>contact@mcgannsmusic.com </strong> <br />
        Phone: <strong>+353 85 555 5555</strong> <br />
        Address: <strong>29 Exchequer St, Dublin 2, D02 X310</strong>
      </p>
    </div>
  </section>
</main>
<!-- Footer template -->
