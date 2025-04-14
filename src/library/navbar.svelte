<script>
  import { Link } from "svelte-spa-router"; // Import the Link component for SPA routing
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/">Home</a>
    <!-- Home link to the root (SPA) -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <!-- Instruments Dropdown -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
          >
            Instruments
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
<<<<<<<< HEAD:McGannsMusic/src/library/navbar.svelte
              <Link class="dropdown-item" to="/guitars">Guitars</Link>
              <!-- Link to guitars page -->
            </li>
            <li>
              <Link class="dropdown-item" to="/piano">Piano</Link>
              <!-- Link to piano page -->
            </li>
            <li>
              <Link class="dropdown-item" to="/violin">Violin</Link>
              <!-- Link to violin page -->
            </li>
            <li>
              <Link class="dropdown-item" to="/drums">Drums & Percussion</Link>
              <!-- Link to drums page -->
            </li>
            <li>
              <Link class="dropdown-item" to="/synthesisers">Synthesizers</Link>
              <!-- Link to synthesizers page -->
            </li>
            <li>
              <Link class="dropdown-item" to="/recording_equipment"
                >Recording Equipment</Link
========
              <a class="dropdown-item" href="#/Instruments/guitar">Guitars</a>
            </li>
            <li>
              <a class="dropdown-item" href="#/Instruments/piano">Piano</a>
            </li>
            <li>
              <a class="dropdown-item" href="#/Instruments/violin">Violin</a>
            </li>
            <li>
              <a class="dropdown-item" href="#/Instruments/drums"
                >Drums & Percussion</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#/Instruments/synthesisers"
                >Synthesizers</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#/Instruments/recording_equipment"
                >Recording Equipment</a
>>>>>>>> svelte_debug:McGannsMusic/src/components/navbar.svelte
              >
              <!-- Link to recording equipment page -->
            </li>
          </ul>
        </li>

        <!-- Other links -->
        <li class="nav-item">
<<<<<<<< HEAD:McGannsMusic/src/library/navbar.svelte
          <Link class="nav-link" to="/contact">Contact</Link>
          <!-- Link to contact page -->
========
          <a class="nav-link" href="#/contact">Contact</a>
>>>>>>>> svelte_debug:McGannsMusic/src/components/navbar.svelte
        </li>

        <li>
<<<<<<<< HEAD:McGannsMusic/src/library/navbar.svelte
          <Link class="nav-link" to="/shoppingcart">
========
          <a class="nav-link" href="#/shopping_cart">
>>>>>>>> svelte_debug:McGannsMusic/src/components/navbar.svelte
            <div class="cart">
              <i class="bi bi-cart"></i>
              <div class="cartAmount">0</div>
              <!-- Shopping cart icon with quantity -->
            </div>
          </Link>
          <!-- Link to shopping cart page -->
        </li>
      </ul>
<<<<<<<< HEAD:McGannsMusic/src/library/navbar.svelte

      <!-- Search Form -->
      <form class="d-flex ms-3" onsubmit="searchFunction()">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          id="searchInput"
        />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
========
>>>>>>>> svelte_debug:McGannsMusic/src/components/navbar.svelte
    </div>
  </div>
</nav>
