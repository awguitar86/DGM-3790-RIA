<template>
  <v-container>
    <Guitar v-for="guitar in guitars" :guitar="guitar" :key="guitar.name"/>
  </v-container>
</template>

<script>
  import Guitar from './Guitar.vue';
  export default {
    data: () => ({
      guitars: [
        {
          id: 1, name: 'Fender Telecaster',
          price: '1,999.99',
          description: 'The 2017 Limited Edition American Professional Mahogany Tele Deluxe ShawBucker is loaded with a pair of fat-sounding ShawBucker humbucking pickups.',
          image: "https://axeheaven.files.wordpress.com/2012/03/ft-004_3_960x11201.jpg"
        },
        {
          id: 2,
          name: 'Gibson Les Paul',
          price: '2,499.00',
          description: "This Les Paul Standard 60s features a solid mahogany body with an AA figured maple top, and a slim taper 60s-style mahogany neck with a rosewood fingerboard and trapezoid inlays.",
          image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Freverb-res.cloudinary.com%2Fimage%2Fupload%2Fs--rGPMcZ1C--%2Fa_exif%2Cc_limit%2Ce_unsharp_mask%3A80%2Cf_auto%2Cfl_progressive%2Cg_south%2Ch_620%2Cq_90%2Cw_620%2Fv1445355108%2Fhwznlfqvvut4ysxuczmf.jpg&f=1&nofb=1"
        },
        {
          id: 3,
          name: 'Ibanez M80M 8-String',
          price: '1,499.99',
          description: "The Ibanez M80M Meshuggah 8-String Electric Guitar is perfectly balanced to deliver a truly great 8-string experience.",
          image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Freverb-res.cloudinary.com%2Fimage%2Fupload%2Fs--ZMs3KGOH--%2Fa_exif%2Cc_limit%2Ce_unsharp_mask%3A80%2Cf_auto%2Cfl_progressive%2Cg_south%2Ch_620%2Cq_90%2Cw_620%2Fv1431244683%2Fc2xs7qdehye3mbiubsrd.jpg&f=1&nofb=1"
        },
        {
          id: 4,
          name: 'Abasi Larada 8',
          price: '2,399.00',
          description: "The Larada 8 is our flagship model. It’s the guitar Tosin Abasi plays live and in the studio. It’s painstakingly designed for players that aren’t satisfied with yet another vintage reproduction.",
          image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fabasiguitars.com%2Fwp-content%2Fuploads%2FAbasi-Larada-Landing-Hero.jpg&f=1&nofb=1"
        },
        {
          id: 5,
          name: 'Kiesel JH6H',
          price: '1,699.00',
          description: "JH6 is modeled on the popular Solo S6, with similar aesthetics and sleek, stylish design cues in a 22-fret, 25.5 inch scale bolt-on neck configuration spec'd out the way Johnny likes it.",
          image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.reverb.com%2Fimage%2Fupload%2Fs--QUwFaQsE--%2Ff_auto%2Ct_large%2Fv1555775942%2Fc32shpev3mdtevexu9ed.jpg&f=1&nofb=1"
        },
        {
          id: 6,
          name: 'Gretsch G5420T',
          price: '849.99',
          description: "Alive and resonant, the G5420T has fully hollow build with a true Filter’Tron™ voice that explodes with huge punch and clear, strong presence.",
          image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fsmhttp.41820.nexcesscdn.net%2F8016262%2Fmagento%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F800x800%2F9df78eab33525d08d6e5fb8d27136e95%2Fg%2Fr%2Fgre-25060115-70_9.jpg&f=1&nofb=1"
        }
      ]
    }),
    components: {
      Guitar
    }
  };
</script>

<style lang="sass">
</style>
