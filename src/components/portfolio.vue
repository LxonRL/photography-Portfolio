<template>
  <div class='row col-lg-12 col-xs-12 justify-center'>
    <div class='row col-lg-6 col-xs-6 justify-center'>
      <q-img class='fussball'
        :src="require('../assets/pictures/mtv-1')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-6 col-xs-6 justify-center'>
      <q-img class='fussball'
        :src="require('../assets/pictures/mtv-az-1')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-12 col-xs-12 justify-center'>
      <q-img class='fussball'
        :src="require('../assets/pictures/mtv-ii-1.jpg')"
        spinner-color="black"
      />
    </div>

    <div class='row col-lg-4 col-xs-6 justify-center'>
      <q-img class='volleyball'
        :src="require('../assets/pictures/svg-1.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-4 col-xs-6 justify-center'>
      <q-img class='volleyball'
        :src="require('../assets/pictures/svg-2.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-4 col-xs-12 justify-center'>
      <q-img class='volleyball'
        :src="require('../assets/pictures/svg-3.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-2 col-xs-3 justify-center'>
      <q-img class='city'
        :src="require('../assets/pictures/kopenhagen-1.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-8 col-xs-6 justify-center'>
      <q-img class='city'
        :src="require('../assets/pictures/kopenhagen-2.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-2 col-xs-3 justify-center'>
      <q-img class='city'
        :src="require('../assets/pictures/kopenhagen-3.jpg')"
        spinner-color="black"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',

  beforeMount(){
    document.body.style.overflow = 'unset'
  }
}
</script>

