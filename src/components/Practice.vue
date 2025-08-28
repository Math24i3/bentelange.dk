<script setup>
</script>

<template>
  <section id="practice" class="practice-section">
    <div class="container practice-grid">
      <!-- Text 2/3 -->
      <div class="practice-text">
        <h2>Praksis</h2>
        <p>
          Bente Lange, arkitekt MAA Ph.D, født i København og uddannet fra
          Kunstakademiets Arkitektskole 1981 og har siden arbejdet som
          praktiserende arkitekt. Mere end 40 års erfaring giver en lethed,
          som ikke kan opnås uden at anstrenge sig. Tegnestuens mål er at finde
          enkle løsninger på komplicerede problemer.
        </p>
        <p>
          Arbejdsområdet er primært relateret eksisterende byggeri lige fra
          gammeldags restaurering til nybyggeri i forbindelse med
          bevaringsværdige eller fredede bygninger. Vi ser det som vores vigtige
          opgave at udfolde muligheder i de bygninger vi arbejder med.
          Begrænsninger i form af fredning eller forhold i bygningen kan vendes
          til frigørelse af overraskende løsninger.
        </p>
        <p>
          Restaureringsopgaverne er enten københavnske byhuse eller danske slotte
          og herregårde samt opgaver i udlandet. For restaurering af herregården
          Turebyholm modtog tegnestuen Europa Nostras guldmedalje. Marienlyst
          Slot er netop restaureret på tag og fag. Bryghuset i Tuborg Havn blev
          transformeret til hovedsæde for rederiet Norden. Middelalderklostret
          San Cataldo blev restaureret og fik alternativ energi. Et par italienske
          landhuse blev istandsat med brug af lokal byggeskik. Projekt udført til
          restaurering af Villa Jorn i Albisola. Det danske Institut i Rom fra
          1964 skal opgraderes hvad angår indeklima, belysning og udearealer.
          Den Frie Udstillingsbygning er et fredet træskur, som nu befries for en
          uheldig tilbygning fra 1953 og samtidig udgraves 1.000 m2 underetage
          til café, formidling og udstilling.
        </p>
        <p>
          Nybyggeri i bevaringsværdige omgivelser eller krævende landskab har vi
          også beskæftiget os med i Bryghuset i Valby, en 5-etages ejendom på
          Vesterbrogade, et par sommerhuse, et galleri til en villa ved Furesøen
          samt et projekt til en tilbygning til Rungstedlund.
        </p>
      </div>

      <!-- Image 1/3 -->
      <div class="practice-image">
        <img src="/src/assets/bentelange_portrait.jpg" alt="Bente Lange portræt" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.practice-section {
  padding: 4rem 1rem;
  background: #f5f3ef;
}

.practice-grid {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 2/3 text, 1/3 image */
  gap: 2rem;
  align-items: start;
}

.practice-text p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #444;
}

/* Profile image */
.practice-image img {
  margin-top: 1rem;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive stacking */
@media (max-width: 900px) {
  .practice-grid {
    grid-template-columns: 1fr;
  }
  .practice-image {
    margin-top: 2rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
