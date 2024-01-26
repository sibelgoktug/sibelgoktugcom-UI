<template>
  <!-- Main container -->
  <div class="container">
      <!-- Header section -->
    <header class="d-flex justify-content-between align-items-center py-3">
       <!-- Navigation bar -->
      <nav class="w-100 navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- logo Area -->
          <a class="navbar-brand" href="#">Logo Alanı</a>
           <!-- Navigation bar toggle button -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Main navigation menu -->
          <div class="collapse navbar-collapse justify-content-center" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Anasayfa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Hakkımda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/calismalarim">Çalışmalarım</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">İletişim</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
