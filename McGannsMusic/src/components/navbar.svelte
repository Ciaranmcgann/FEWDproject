<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/index.html">Home</a>
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
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
          >
            Instruments
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="/Instruments/guitar">Guitars</a>
            </li>
            <li>
              <a class="dropdown-item" href="pages/Instruments/piano.html"
                >Piano</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="pages/Instruments/violin.html"
                >Violin</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="pages/Instruments/drums.html"
                >Drums & Percussion</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="pages/Instruments/synthesisers.html">Synthesizers</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="pages/Instruments/recording_equipment.html"
                >Recording Equipment</a
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="pages/contact.html">Contact</a>
        </li>
        <li>
          <a class="nav-link" href="pages/shopping_cart.html">
            <div class="cart">
              <i class="bi bi-cart"></i>
              <div class="cartAmount">0</div>
            </div>
          </a>
        </li>
      </ul>
      <form class="d-flex ms-3" onsubmit="searchFunction()">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          id="searchInput"
        />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
