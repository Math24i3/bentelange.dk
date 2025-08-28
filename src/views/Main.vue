<script setup>
import Home from '@/components/Home.vue'
import Practice from '@/components/Practice.vue'
import Projects from '@/components/Projects.vue'
import Books from '@/components/Books.vue'
import CV from '@/components/CV.vue'
import Video from '@/components/Video.vue'

</script>

<template>
  <div>
    <Home />
    <Practice />
    <Projects />
    <Books />
    <CV />
    <Video />
    <section id="contact">
      <div class="container">
        <h2>Kontakt</h2>
        <p>Nyhavn 3, 1051 København K, Danmark</p>
        <p>
          <a href="tel:+4540326582">+45 40 32 65 82</a>
        </p>
        <p>
          <a href="mailto:bente@bentelange.dk">bente@bentelange.dk</a>
        </p>
      </div>
    </section>


    <footer>
      <div class="container">
        <p>© {{ new Date().getFullYear() }} Bente Lange Arkitekter ApS</p>
        <p>CVR: 37885665</p>
      </div>
    </footer>
  </div>
</template>
<style scoped>
#contact a {
  color: #b22222;          /* architectural red accent */
  text-decoration: none;
  font-weight: 500;
}

#contact a:hover {
  text-decoration: underline;
}

</style>
