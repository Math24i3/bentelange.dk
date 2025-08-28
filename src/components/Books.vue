<script setup>
const books = [
  { 
    title: "Arkitektur for børn", 
    year: "2008–2009", 
    tags: ["Børn", "Arkitektur"], 
    cover: "/src/assets/books/01boeger_boernebog.jpg", 
    alt: "Bogserie: Arkitektur for børn" 
  },
  { 
    title: "Rigtige sommerhuse", 
    year: "2010", 
    tags: ["Kultur"], 
    cover: "/src/assets/books/01boeger_rigtige_sommerhuse.jpg", 
    alt: "Rigtige sommerhuse bogomslag" 
  },
  { 
    title: "Thorvaldsens Museum", 
    year: "2002", 
    tags: ["Kultur", "Kunst"], 
    cover: "/src/assets/books/01boeger_thorvaldsens_museum.jpg", 
    alt: "Thorvaldsens Museum bogomslag" 
  },
  { 
    title: "Bayt al’Aqqad", 
    year: "2005", 
    tags: ["Kultur"], 
    cover: "/src/assets/books/01boeger_baytalaqqad.jpg", 
    alt: "Bayt al’Aqqad bogomslag" 
  },
  { 
    title: "Københavns farver", 
    year: "1996–97", 
    tags: ["Kultur"], 
    cover: "/src/assets/books/01boeger_kobenhavns_farve.jpg", 
    alt: "Københavns farver bogomslag" 
  },
  { 
    title: "Roms farver / The Colours of Rome", 
    year: "1993 / 1995", 
    tags: ["Kultur"], 
    cover: "/src/assets/books/01boeger_roms_farver.jpg", 
    alt: "Roms farver bogomslag" 
  },
  { 
    title: "Et hus i Damaskus", 
    year: "2003", 
    tags: ["Kultur", "Restaurering"], 
    cover: "/src/assets/books/01boeger_husidamaskus.jpg", 
    alt: "Et hus i Damaskus bogomslag" 
  },
  { 
    title: "Den Frie Udstillingsbygning", 
    year: "2012", 
    tags: ["Kultur", "Kunst"], 
    cover: "/src/assets/books/01boeger_den_frie.jpg", 
    alt: "Den Frie Udstillingsbygning bogomslag" 
  },
  { 
    title: "San Cataldo", 
    year: "2013", 
    tags: ["Restaurering", "Kultur", "Kloster"], 
    cover: "/src/assets/books/01boeger_san_cataldo.jpg", 
    alt: "San Cataldo bogomslag" 
  },
  { 
    title: "Marienlyst Slot", 
    year: "2013 / 2015", 
    tags: ["Restaurering", "Kultur"], 
    cover: "/src/assets/books/01boeger_marienlyst_slot.jpg", 
    alt: "Marienlyst Slot bogomslag" 
  },
  { 
    title: "Murede ildsteder", 
    year: "2006", 
    tags: ["Kultur", "Håndværk"], 
    cover: "/src/assets/books/01boeger_murede_ildsteder.jpg", 
    alt: "Murede ildsteder bogomslag" 
  }
]

</script>
<template>
    <section id="books">
      <div class="container">
        <h2>Bøger</h2>
        <div class="grid grid-3">
          <article v-for="b in books" :key="b.title" class="card books-card">
            <figure class="thumb">
              <!-- If you have multiple sizes later, swap to <picture> with srcset -->
              <img
                :src="b.cover"
                :alt="b.alt || b.title"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div class="books-meta">
              <h3 class="books-title">{{ b.title }}</h3>
              <p class="books-alt">{{ b.year }}</p>
              <div class="tags">
                <span v-for="tag in b.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
</template>
<style scoped>
/* Project cards */
.books-card {
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
.books-card:hover .thumb img {
  transform: scale(1.03);   /* very subtle zoom */
  filter: saturate(1.02);
}

/* Text block */
.books-meta {
  padding: 1rem 1rem 1.25rem;
}

.books-title {
  font-family: "Merriweather", serif;
  font-weight: 700;
  margin: 0 0 .25rem;
  color: #1d1d1d;
}

.books-alt {
  margin: 0 0 .75rem;
  color: #666;
}
</style>