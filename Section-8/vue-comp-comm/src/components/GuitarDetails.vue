<template>
  <v-container>
    <v-card
      max-width="375"
      class="mx-auto"
    >
      <v-img
        src="https://axeheaven.files.wordpress.com/2012/03/ft-004_3_960x11201.jpg"
        height="300px"
      >
        <v-row class="fill-height d-flex justify-start align-end">
          <v-card-title>
            <div class="white--text pl-4 pb-2">Fender Telecaster</div>
          </v-card-title>
        </v-row>
      </v-img>

      <v-list two-line>
        <v-list-item>
          <v-list-item-content>
            <p>
              The 2017 Limited Edition American Professional Mahogany Tele Deluxe ShawBucker is loaded with a pair of fat-sounding ShawBucker humbucking pickups.
              Voiced specifically for each position, the ShawBucker pickups add a new dimension of depth to the guitar’s voice. Topped by 22 narrow-tall frets
              for easy bending, the 9.5 in.-radius maple fingerboard is ideal for most playing styles, offering enough arc for comfortable chording while remaining fat enough for wide bends.
            </p>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="d-flex align-center justify-space-between">
          <div class="d-flex align-cnter">
            <v-icon color="indigo mr-3">mdi-currency-usd</v-icon>
            <h3>1,999.99</h3>
          </div>
          <v-btn>Change Price</v-btn>
        </v-list-item>

      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({

  })
};
</script>

<style lang="sass">
</style>
