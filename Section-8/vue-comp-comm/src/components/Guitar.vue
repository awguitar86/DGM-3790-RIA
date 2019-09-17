<template>
  <v-list-item @click="guitarSelect">
    <v-list-item-content>
      <v-list-item-title>{{ guitar.name}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
  import { eventBus } from '../main';
  export default {
    props: ['guitar'],
    methods: {
      guitarSelect() {
        eventBus.$emit('guitarSelected', this.server);
      }
    }
  };
</script>

<style lang="sass">
</style>
