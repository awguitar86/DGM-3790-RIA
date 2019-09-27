<template>
  <v-app>
    <v-content class="d-flex flex-column align-center">
      <Header/>
        <div class="body">
          <Servers/>
          <ServerDetails/>
        </div>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';
  import Servers from './components/Servers';
  import ServerDetails from './components/ServerDetails';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      Servers,
      ServerDetails
    },
  };
</script>

<style media="screen" type="scss">
  .body {
    width: 50vw;
    display: flex;
  }
</style>
