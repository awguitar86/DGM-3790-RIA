<template>
  <v-container>
    <Server v-for="server in servers" :server="server" :key="server.id"/>
  </v-container>
</template>

<script>
  import Server from './Server.vue';
  export default {
    data: function(){
      return {
        servers: [
          { id: 1, status: 'Normal' },
          { id: 2, status: 'Critical' },
          { id: 3, status: 'Offline' },
          { id: 4, status: 'Normal' },
          { id: 5, status: 'Dead' },
          { id: 6, status: 'Crawling' }
        ]
      }
    },
    components: {
      Server
    }
  };
</script>

<style lang="sass">
</style>
