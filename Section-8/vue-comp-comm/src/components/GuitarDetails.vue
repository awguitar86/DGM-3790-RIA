<template>
  <v-container>
    <v-card
      max-width="375"
      class="mx-auto"
    >
      <v-img
        src="https://axeheaven.files.wordpress.com/2012/03/ft-004_3_960x11201.jpg"
        height="300px"
        dark
      >
        <v-row class="fill-height">
          <v-card-title class="white--text pl-8 pt-12">
            <div class="display-1 pl-8 pt-12">Fender Telecaster</div>
          </v-card-title>
        </v-row>
      </v-img>

      <v-list two-line>
        <v-list-item @click="">
          <v-list-item-icon>
            <v-icon color="indigo">mdi-phone</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>(650) 555-1234</v-list-item-title>
            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item @click="">
          <v-list-item-action></v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>(323) 555-6789</v-list-item-title>
            <v-list-item-subtitle>Work</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item @click="">
          <v-list-item-icon>
            <v-icon color="indigo">mdi-email</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>aliconnors@example.com</v-list-item-title>
            <v-list-item-subtitle>Personal</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="">
          <v-list-item-action></v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>ali_connors@example.com</v-list-item-title>
            <v-list-item-subtitle>Work</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item @click="">
          <v-list-item-icon>
            <v-icon color="indigo">mdi-map-marker</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>1400 Main Street</v-list-item-title>
            <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
          </v-list-item-content>
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
