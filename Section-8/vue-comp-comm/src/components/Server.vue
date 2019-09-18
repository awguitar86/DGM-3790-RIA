<template>
  <v-list-item @click="serverSelect">
    <v-list-item-content>
      <v-list-item-title>Server #{{ server.id}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
  import { eventBus } from '../main';
  export default {
    props: ['server'],
    methods: {
      serverSelect() {
        eventBus.$emit('serverSelected', this.server);
        console.log("server selected");
      }
    }
  };
</script>

<style lang="sass">
</style>
