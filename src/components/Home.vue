<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const heroImages = [
  '/src/assets/01_slider_forside.jpg',
  '/src/assets/03_slider_forside.jpg',
  '/src/assets/04_slider_forside.jpg',
  '/src/assets/05_slider_forside.jpg',
  '/src/assets/06_slider_forside.jpg',
  '/src/assets/08_slider_forside.jpg',
  '/src/assets/09_slider_forside.jpg',
  '/src/assets/10_slider_forside.jpg',
  '/src/assets/11_slider_forside.jpg',
  '/src/assets/12_slider_forside.jpg',
  '/src/assets/07_slider_forside.jpg',
  '/src/assets/02_slider_forside.jpg'
]

const currentSlide = ref(0)

let interval
onMounted(() => {
  interval = setInterval(() => {
    console.log("test");
    currentSlide.value = (currentSlide.value + 1) % heroImages.length
  }, 5000) // change every 5s
})
onUnmounted(() => clearInterval(interval))

</script>
<template>
  <section id="home" class="hero">
    <!-- Background slideshow -->
    <div class="hero-bg">
      <div
        class="slide"
        v-for="(img, i) in heroImages"
        :key="i"
        :style="{ backgroundImage: `url(${img})` }"
        :class="{ active: i === currentSlide }"
      ></div>
    </div>

    <!-- Overlay content with animation -->
    <transition name="fade-slide" appear>
      <div class="container hero-content">
        <h2>Enkle løsninger på komplekse udfordringer</h2>
        <p>At forvandle fredning og bygningers særlige vilkår til overraskende løsninger</p>
        <a href="#projects" class="btn">Se projekter</a>
        <a href="#video" class="btn outline">Video: 3 Minutter om restaurering</a>
      </div>
    </transition>
  </section>
</template>

<style scoped>
#home {
  padding: 6rem 1rem;
  text-align: center;
  background: url('/src/assets/hero-bg.jpg') center/cover no-repeat;
  color: rgb(80, 79, 79);
}

#home h2 {
  font-size: 2.8rem;
}

#home p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 1rem auto 2rem;
}
/* Hero section */
.hero {
  position: relative;
  height: 90vh; /* more presence */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
}

/* Background slideshow */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}
.hero-bg .slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  filter: brightness(0.65); /* darker so text stands out */
  transition: opacity 1.5s ease-in-out;
}
.hero-bg .slide.active {
  opacity: 1;
}

/* Frosted glass overlay */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

/* Headline */
.hero-content h2 {
  font-family: "Merriweather", serif;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 2px 6px rgba(0,0,0,0.5);
}

/* Subtext */
.hero-content p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #f5f5f5;
  text-shadow: 0 1px 3px rgba(0,0,0,0.4);
}

/* Buttons */
.hero-content .btn {
  margin: 0.5rem;
  padding: 0.75rem 1.6rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  background: #b22222;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid #b22222;
}
.hero-content .btn:hover {
  background: transparent;
  color: #b22222;
}

.hero-content .btn.outline {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
}
.hero-content .btn.outline:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Transition for fade-slide */
.fade-slide-enter-active,
.fade-slide-appear-active {
  transition: all 0.9s cubic-bezier(0.25, 1, 0.3, 1);
}
.fade-slide-enter-from,
.fade-slide-appear-from {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}
.fade-slide-enter-to,
.fade-slide-appear-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Optional subtle stagger for child elements */
.hero-content h2,
.hero-content p,
.hero-content .btn {
  opacity: 0;
  transform: translateY(20px);
  animation: riseIn 1s forwards;
}
.hero-content h2 { animation-delay: 0.3s; }
.hero-content p  { animation-delay: 0.6s; }
.hero-content .btn { animation-delay: 0.9s; }

@keyframes riseIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>