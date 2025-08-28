<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { projects } from '@/data/projects.js'

const route = useRoute()
const slug = route.params.slug

const project = computed(() => {
  return projects.find(
    p => p.title.toLowerCase().replaceAll(' ', '-') === slug
  )
})

const currentSlide = ref(0)
const fullscreen = ref(false)

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % project.value.images.length
}
function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + project.value.images.length) %
    project.value.images.length
}
function toggleFullscreen() {
  fullscreen.value = !fullscreen.value
}
</script>

<template>
  <section v-if="project" class="project-view">
    <div class="container project-grid" v-if="!fullscreen">
      <!-- Left column: text/meta -->
      <div class="project-text">
        <h1>{{ project.title }}</h1>
        <p class="location">{{ project.location }}</p>
        <p class="year">{{ project.year }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>

        <article class="description">
          <p v-for="(p, i) in project.description" :key="i">{{ p }}</p>
        </article>
      </div>

      <!-- Right column: slideshow -->
      <div class="slideshow">
        <button @click="prevSlide" aria-label="Forrige billede">‹</button>
        <img
          :src="project.images[currentSlide]"
          :alt="`${project.title} billede ${currentSlide+1}`"
          @click="toggleFullscreen"
        />
        <button @click="nextSlide" aria-label="Næste billede">›</button>
        <div class="enlarge-hint">Klik på billedet for at forstørre</div>
      </div>
    </div>

    <!-- Fullscreen slideshow -->
    <div v-else class="fullscreen-slideshow">
      <button class="close-btn" @click="toggleFullscreen">×</button>
      <button class="prev-btn" @click="prevSlide">‹</button>
      <img
        :src="project.images[currentSlide]"
        :alt="`${project.title} billede ${currentSlide+1}`"
      />
      <button class="next-btn" @click="nextSlide">›</button>
    </div>
  </section>

  <section v-else class="container">
    <p>Projektet blev ikke fundet.</p>
  </section>
</template>

<style scoped>
.project-view {
  padding: 4rem 1rem;
  background: #f5f3ef;
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.project-text h1 {
  font-family: "Merriweather", serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.project-text .location,
.project-text .year {
  color: #666;
}
.tags {
  margin: 0.5rem 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  background: #fff;
}
.description {
  color: #444;
  line-height: 1.6;
  margin-top: 1.5rem;
}

.slideshow {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.slideshow img {
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  object-fit: contain;
  cursor: zoom-in;
}
.slideshow button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.8);
  border: none;
  font-size: 2rem;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
}
.slideshow button:hover {
  background: rgba(255,255,255,1);
}
.slideshow button:first-of-type { left: 0.5rem; }
.slideshow button:last-of-type { right: 0.5rem; }

.enlarge-hint {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.274);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

/* Fullscreen slideshow */
.fullscreen-slideshow {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.fullscreen-slideshow img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 6px;
  object-fit: contain;
}
.fullscreen-slideshow button {
  position: absolute;
  background: rgba(255,255,255,0.85);
  border: none;
  font-size: 2rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: 4px;
}
.fullscreen-slideshow .close-btn {
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
}
.fullscreen-slideshow .prev-btn {
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
}
.fullscreen-slideshow .next-btn {
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>
