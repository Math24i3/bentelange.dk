<script setup>
// Data
const projects = [
  { 
    title: "Det Danske Institut i Rom", 
    location: "Rom, Italien", 
    tags: ["Restaurering", "Kultur"], 
    year: "1964–» (opgradering)", 
    cover: "/src/assets/projects/01_danske_institut_i_rom.jpg", 
    alt: "Det Danske Institut i Rom – facade" 
  },
  { 
    title: "San Cataldo", 
    location: "Amalfikysten, Italien", 
    tags: ["Restaurering", "Kloster"], 
    year: "Historisk", 
    cover: "/src/assets/projects/01_san_cataldo.jpg", 
    alt: "San Cataldo kloster – gårdrum" 
  },
  { 
    title: "Den Frie Udstillingsbygning", 
    location: "København, Danmark", 
    tags: ["Kultur", "Restaurering"], 
    year: "—", 
    cover: "/src/assets/projects/01_den_frie_ udstillingsbygning.jpg", 
    alt: "Den Frie Udstillingsbygning – facade" 
  },
  { 
    title: "Marienlyst Slot", 
    location: "Helsingør, Danmark", 
    tags: ["Slot", "Restaurering"], 
    year: "2013–15", 
    cover: "/src/assets/projects/01_marienlyst_slot.jpg", 
    alt: "Marienlyst Slot – restaurering" 
  },
  { 
    title: "Toldbodbygningen", 
    location: "København, Danmark", 
    tags: ["Bygning", "Restaurering"], 
    year: "—", 
    cover: "/src/assets/projects/01_toldbodbygningen.jpg", 
    alt: "Toldbodbygningen – facade" 
  },
  { 
    title: "Det Danske Institut i Damaskus", 
    location: "Damaskus, Syrien", 
    tags: ["Kultur", "Restaurering"], 
    year: "—", 
    cover: "/src/assets/projects/01_det_danske_hus_i_damaskus.jpg", 
    alt: "Det Danske Institut i Damaskus – gård" 
  },
  { 
    title: "Frederiksborg Slotshave", 
    location: "Hillerød, Danmark", 
    tags: ["Have", "Restaurering"], 
    year: "1997", 
    cover: "/src/assets/projects/01_frederiksborg_slotshave.jpeg", 
    alt: "Frederiksborg Slotshave – haveanlæg" 
  },
  { 
    title: "Turebyholm", 
    location: "Tureby, Danmark", 
    tags: ["Herregård", "Restaurering"], 
    year: "2002 (Europa Nostra)", 
    cover: "/src/assets/projects/01_turebyholm.jpg", 
    alt: "Turebyholm – facade" 
  },
  { 
    title: "Restaurering af ruin på Amalfikysten", 
    location: "Amalfikysten, Italien", 
    tags: ["Restaurering", "Ruin"], 
    year: "—", 
    cover: "/src/assets/projects/projekter_eget_hus_italien.jpg", 
    alt: "Restaurering af ruin på Amalfikysten" 
  },
  { 
    title: "Gammel Holtegaard", 
    location: "Holte, Danmark", 
    tags: ["Kultur", "Restaurering"], 
    year: "—", 
    cover: "/src/assets/projects/01_gammel_holdegaard.jpg", 
    alt: "Gammel Holtegaard – facade" 
  },
  { 
    title: "Tuborg Bryghus", 
    location: "Hellerup, Danmark", 
    tags: ["Industri", "Restaurering", "Kultur"], 
    year: "—", 
    cover: "/src/assets/projects/01_tuborg_bryghus.jpg", 
    alt: "Tuborg Bryghus – facade" 
  },
  { 
    title: "Privat galleri ved Furesøen", 
    location: "Furesø, Danmark", 
    tags: ["Galleri", "Renovering"], 
    year: "—", 
    cover: "/src/assets/projects/01_privat_galleri_furesoen.jpg", 
    alt: "Privat galleri ved Furesøen – facade" 
  },
  { 
    title: "Svaneke Badeklub", 
    location: "Bornholm, Danmark", 
    tags: ["Kultur", "Nybyggeri"], 
    year: "—", 
    cover: "/src/assets/projects/01_svaneke_badeklub.jpg", 
    alt: "Svaneke Badeklub – facade" 
  }
]


import { computed } from 'vue'


const filteredProjects = computed(() => {
  return projects
})
</script>
<template>
    <section id="projects">
      <div class="container">
        <h2>Projekter</h2>
        <div class="grid grid-3">
          <article
            v-for="p in filteredProjects"
            :key="p.title"
            class="card project-card"
          >
            <router-link :to="`/projects/${p.title.toLowerCase().replaceAll(' ', '-')}`">
              <figure class="thumb">
                <img :src="p.cover" :alt="p.alt || p.title" loading="lazy" />
              </figure>
              <div class="project-meta">
                <h3 class="project-title">{{ p.title }}</h3>
                <p class="project-location">{{ p.location }}</p>
                <div class="tags">
                  <span v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </router-link>
          </article>
        </div>
      </div>
    </section>
</template>
<style scoped>
/* Project cards */
.project-card {
  padding: 0;               /* image edge-to-edge */
  overflow: hidden;         /* hide zoom overflow */
}

/* Thumbnail frame */
.thumb {
  position: relative;
  aspect-ratio: 16 / 9;      /* consistent aspect; change to 3/2 or 16/9 if you prefer */
  background: #e9e7e3;      /* subtle placeholder tone */
  overflow: hidden;
  border-radius: 3px;
}

/* Image treatment */
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;        /* crops elegantly */
  display: block;
  transform: scale(1.0);
  transition: transform 0.6s ease, filter 0.3s ease;
}

/* Elegant “mat” frame line */
.thumb::after {
  content: "";
  position: absolute; inset: 0;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
  pointer-events: none;
}

/* Hover behavior */
.project-card:hover .thumb img {
  transform: scale(1.03);   /* very subtle zoom */
  filter: saturate(1.02);
}

/* Text block */
.project-meta {
  padding: 1rem 1rem 1.25rem;
}

.project-title {
  font-family: "Merriweather", serif;
  font-weight: 700;
  margin: 0 0 .25rem;
  color: #1d1d1d;
}

.project-location {
  margin: 0 0 .75rem;
  color: #666;
}

.project-card a {
  text-decoration: none;   /* remove underline */
  color: inherit;          /* use same color as surrounding text */
  display: block;          /* make the whole card clickable */
}

.project-card a:hover .project-title {
  text-decoration: underline; /* optional: only underline title on hover */
}

</style>