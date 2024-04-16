<template>
  <div class="container" v-if="weather">
    <Navbar />
    <Main />
  </div>
  <Loader v-else />

</template>

<script>
import { computed } from 'vue';
import Main from './components/Main.vue';
import Navbar from './components/Navbar.vue';
import { mapState, mapActions } from 'vuex'

export default {
  components: { Navbar, Main },

  computed: {
    ...mapState(['weather'])
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  created() {
    this.getWeather('Ташкент')
  }


}
</script>
