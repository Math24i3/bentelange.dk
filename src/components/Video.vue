<script setup>
const videoUrl = "https://player.vimeo.com/video/472578896"
</script>

<template>
  <section id="video">
    <div class="container">
      <h2>3 Minutter om restaurering</h2>
      <div class="video-wrapper">
        <iframe
          :src="videoUrl"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="3 minutter om restaurering"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
