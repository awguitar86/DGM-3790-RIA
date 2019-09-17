<template>
  <v-container>
    <v-card
      max-width="375"
      class="mx-auto"
    >
      <v-img
        :src="guitar.image"
        height="300px"
      >
        <v-row class="fill-height d-flex justify-start align-end">
          <v-card-title>
            <div class="white--text pl-4 pb-2">{{guitar.name}}</div>
          </v-card-title>
        </v-row>
      </v-img>

      <v-list two-line>
        <v-list-item>
          <v-list-item-content>
            <p>{{ guitar.description }}</p>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="d-flex align-center justify-space-between">
          <div class="d-flex align-cnter">
            <v-icon color="indigo mr-3">mdi-currency-usd</v-icon>
            <h3>{{ guitar.price }}</h3>
          </div>
          <v-btn @click="changePrice">Change Price</v-btn>
        </v-list-item>

      </v-list>
    </v-card>
  </v-container>
</template>

<script>
  import { eventBus } from '../main';
  export default {
    data: () => ({
      guitar: null
    }),
    methods: {
      changePrice() {
        this.guitar.price = this.guitar.price - (this.guitar.price * 0.2);
      }
    },
    created() {
      eventBus.$on('guitarSelected', (guitar) => {
        this.guitar = guitar;
      });
    }
  };
</script>

<style lang="sass">
</style>
