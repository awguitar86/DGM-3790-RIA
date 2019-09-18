<template>
  <v-container>
    <v-card max-width="375" class="mx-auto">
      <v-list two-line>
        <v-list-item>
          <v-list-item-content>
            <p>Server #{{ server === null ? null : server.id }}</p>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-content>
            <p>Status: {{ server === null ? null : server.status }}</p>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-btn class="blue" @click="changeStatus">Update Status</v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
  import { eventBus } from '../main';
  export default {
    data: () => ({
      server: null
    }),
    methods: {
      changeStatus() {
        this.server.status = "Normal";
      }
    },
    created() {
      eventBus.$on('serverSelected', (server) => {
        this.server = server;
      });
    }
  };
</script>

<style lang="sass">
</style>
