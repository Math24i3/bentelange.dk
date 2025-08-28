<script setup>
// Static structured data for the CV
const education = [
  "Ph.D., Kunstakademiets Arkitektskole, 1991",
  "Post-graduat 6 mdr. studieophold, 'Architectural Conservation' ICCROM, 1984",
  "Arkitekt MAA, Kunstakademiets Arkitektskole, 1981",
  "Student, mat.-fys. fra Holte Gymnasium, 1974"
];

const awards = [
  "Eckersberg Medaljen, 2019",
  "Henning Larsens Fond, 2016",
  "Tagea Brandts Rejselegat, 2015",
  "Hovedstadens forskønnelse arkitekturpris, 2015",
  "Ole Haslunds Kunstnerlegat, 2013",
  "Statens Kunstfonds Arbejdslegat, 2003",
  "Europa Nostra Medalje for restaurering af Turebyholm, 2002",
  "Europa Nostra for restaurering af haven ved Frederiksborg Slot, 1997",
  "Gentofte Kommunes pris for forbilledlig restaurering af Christiansholm, 1994",
  "Foreningen til hovedstadens forskønnelse, 1992",
  "Københavns Kommunes Kulturfond, 1992",
  "Nykredits arkitekturpris, 1989",
  "Fritz Schlegels arkitekturpris, 1987",
  "Dronning Ingrids Romerske Fond, 1984",
  "Tessin Prisen, 1983"
];

const roles = [
  "Bestyrelsesmedlem af Rungstedlundfonden, 2007-17-",
  "Bestyrelsesmedlem på værkstederne på Gl. Dok, 2002-2007",
  "Jurymedlem af Europa Nostra Award, 2002-2007",
  "Akademirådets Udvalg for Kirkekunst, 2006-",
  "Censor på Arkitektskolerne, 2005-",
  "Bestyrelsesmedlem for San Cataldo i Italien, 2000-",
  "Medlem af Akademiet, 1996-",
  "Bestyrelsesmedlem for Det Danske Institut i Rom, 1996-2004",
  "Medlem af skolerådet for Holbæk Kunsthøjskole, 2002-",
  "Medlem af rådgiverteamet ved Slots- og Ejendomsstyrelsen, 1995-2000",
  "Censor ved Kunstakademiets Arkitektskole, 1995-",
  "Leder af konference for Council of Europe, 1995",
  "Medlem (formand det sidste år) af Nykredits Arkitekturpris, 1994-2002",
  "Bestyrelsesmedlem i Foreningen Nordens arkitektur, 1993-1994",
  "Konsulent for Europa Nostra’s nationale komité Dania Nostra, 1993-1994",
  "Diplomcensor ved Arkitektskolen i Oslo, 1993-1994",
  "Rådgiver for Miljøministeriet, 1991-1995"
];

const majorProjects = [
  "Søkvæsthuset",
  "Det Danske Institut i Rom",
  "Den Frie Udstillingsbygning",
  "San Cataldo",
  "Galleri til privat kunstsamling i Holte",
  "Det Danske Institut i Damaskus",
  "Amaliegade 22 og 49",
  "Frederiksborg Slots have",
  "Christiansholm Slot",
  "Herregården Turebyholm",
  "Herregården Løvenborg",
  "Herregård i Holsteinborg",
  "Herregård i Juellinge",
  "Herregård i Beldringe",
  "Trekroner Bryghus",
  "Vesterbrogade 58, nybygning",
  "Sommerhus Sjællands Odde",
  "Sommerhus Holmsland Klit",
  "Heerings Gård på Christianshavn",
  "San Cataldo klostret i Italien",
  "Marienlyst Slot ved Helsingør",
  "Vallø Slot",
  "Bryghuset Tuborg Havn for rederiet Norden",
  "Gråbrødre Torv 5",
  "Nyhavn 3, 5 og 65"
];

const publications = [
  "Kay Fisker i Rom, 2017",
  "Et Dansk Hus i Marokko (Red., 2016)",
  "Marienlyst Slot, 2015",
  "San Cataldo, et adeligt nonnekloster på Amalfykysten (2013)",
  "Marienlyst Slot (2013)",
  "Den Frie Udstillingsbygning (2012)",
  "Rigtige Sommerhuse (2010)",
  "Huse og Vand (2008)",
  "Huse og Luft (2008)",
  "Huse og ild (2009)",
  "Huse og jord (2009)",
  "Murede Ildsteder (2006)",
  "Baya al’Aqqad, The History and Restauration of a House in old Damascus (2005)",
  "Et Hus i Damascus, dansk og engelsk (2003)",
  "Thorvaldsen’s Museum, dansk og engelsk (2002)",
  "Københavns Farver, dansk og engelsk (1996-1997)",
  "The Colours of Rome, engelsk (1995)",
  "Roms Farver, dansk og italiensk (1993)"
];

const articles = [
  "Sgrafitto, festskrift til Kjeld de Fine Licht, 2007",
  "Raffineret mådehold, Architectura, 2004",
  "Restaurering af Turebyholm, Arkitektur 7, 2000",
  "Restaureringsarkitekten, Arkitekten 11, 1997",
  "De skiftende farver i København, Hunaniora 1, 1996",
  "Restaurering af den formelle have ved Frederiksborg Slot, 1996",
  "Kalkning, By og Land 26, 1995",
  "Preservation of Buildings in Denmark, National Forest and Nature Agency, 1994",
  "Københavns Farver – det tabte sprog, By og Land 17, 1993",
  "Københavnske Kirkefacader, By og Land 19, 1993",
  "Roms Farver, Byrum og facader fra Renaissancen til nu… Ph.D., 1991",
  "Roms Farver, Forskning og Samfund 7, 1991",
  "The Dynamic Space of the Baroque Period, Cras 58, 1990",
  "Is the facade of Palazzo Farnese incomplete?, Analecta Romana 19, 1990",
  "Carlo Scarpa the Architect, Arkitekten 11, 1986"
];
</script>

<template>
  <section id="cv">
    <div class="container">
      <h2>CV</h2>
      <div class="cv-group">
        <h3>Uddannelse</h3>
        <ul>
          <li v-for="(item, idx) in education" :key="'edu'+idx">{{ item }}</li>
        </ul>
      </div>

      <div class="cv-group">
        <h3>Arkitekturpriser</h3>
        <ul>
          <li v-for="(item, idx) in awards" :key="'aw'+idx">{{ item }}</li>
        </ul>
      </div>

      <div class="cv-group">
        <h3>Særlige hverv</h3>
        <ul>
          <li v-for="(item, idx) in roles" :key="'role'+idx">{{ item }}</li>
        </ul>
      </div>

      <div class="cv-group">
        <h3>Større udførte projekter</h3>
        <ul>
          <li v-for="(item, idx) in majorProjects" :key="'proj'+idx">{{ item }}</li>
        </ul>
      </div>

      <div class="cv-group">
        <h3>Publikationer</h3>
        <ul>
          <li v-for="(item, idx) in publications" :key="'pub'+idx">{{ item }}</li>
        </ul>
      </div>

      <div class="cv-group">
        <h3>Artikler</h3>
        <ul>
          <li v-for="(item, idx) in articles" :key="'art'+idx">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cv-section {
  background: #f5f3ef;
  padding: 4rem 1rem;
}

.cv-group {
  margin-bottom: 2rem;
}

.cv-group h3 {
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #222;
}

.cv-group ul {
  list-style-type: disc;
  margin-left: 1.2rem;
  color: #444;
}

.cv-group li {
  margin-bottom: 0.5rem;
  line-height: 1.45;
}
</style>
