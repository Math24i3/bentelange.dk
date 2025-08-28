<script setup>
</script>
<template>
    <header>
      <div class="container header-container">
        <!-- Logo -->
        <a href="/#home" class="logo">
          <span class="logo-line red">BENTE</span>
          <span class="logo-line red">LANGE</span>
          <span class="logo-line black">ARKITEKTER</span>
        </a>

        <!-- Navigation -->
        <nav class="main-nav">
          <a href="/#practice">Praksis</a>
          <a href="/#projects">Projekter</a>
          <a href="/#books">Bøger</a>
          <a href="/#cv">CV</a>
          <a href="/#contact">Kontakt</a>
        </nav>
      </div>
    </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  background: rgba(253, 250, 245, 0.95);
  border-bottom: 1px solid #ccc;
  font-weight: 500;
  z-index: 10;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 0;
}

/* Logo styling */
.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  text-decoration: none;
}

.logo-line {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

.logo-line.red {
  color: #b22222; /* architectural red */
}

.logo-line.black {
  color: #000;
  font-size: 0.9rem;
  letter-spacing: 0.3rem;
}

/* Navigation */
.main-nav {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.main-nav a {
  text-decoration: none;
  font-weight: 500;
  color: #333;
  letter-spacing: 0.05rem;
  transition: color 0.2s;
}

.main-nav a:hover {
  color: #b22222;
}

nav a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
</style>