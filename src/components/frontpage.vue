<template>
  <div class='row full-width'>
    <div class='main-content row col-lg-12' smooth-scroll :duration="1000">
      <div v-if='isMobile != true' class='main-content-left row col-xl-5 col-lg-5 col-xs-12 justify-center'>
        <h1 class='main-content-left-text'> SPORT <br> FOTOGRAFIE </h1>
      </div>
      <div class='row col-xl-7 col-lg-7'>
        <div class='row col-lg-12'>
          <h1 class='header-text'> LEON TONHÄUSER </h1>
        </div>
        <div class='row col-lg-8'>
          <h1 class='story-text'>
            Auf dem Fußballplatz tanzen die Sonnenstrahlen über dem jubelnden Siegtor, 
            während gleichzeitig in der Sporthalle das intensive Krachen des Volleyballs den Kampf zweier Teams um jeden Punkt verkündet. 
            <br>
            <br>
            Zwei Sportwelten, eine Leidenschaft.
          </h1>
        </div>
      </div>
    </div>
    <contentWindow></contentWindow>
  </div>
</template>

<script>
import contentWindow from './contentwindow.vue'

export default {
  name: 'frontPage',

  components: {
    contentWindow
  },

  computed: {
    isMobile: function() {
      return this.$store.getters.isMobile;
    }
  }
}
</script>

<style>
.main-content{
  margin-bottom: 100px;
}

.main-content-left-text{
  color: rgb(49,53,58);
  font-size: 50px;
  font-weight: 600;
  line-height: 100%;
  padding-top: 20px;
}

.header-text{
  color: rgb(49,53,58);
  font-size: 25px;
  font-weight: 600;
  text-align: left;
  margin: 20px;
  height: 30px;
}
</style>

