<template>
  <v-app>
    <v-content>
      <Header/>
        <Guitars/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Guitars from './components/Guitars';
import GuitarDetails from './components/GuitarDetails';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Guitars,
    GuitarDetails
  },
  data: () => ({
    //
  }),
};
</script>
