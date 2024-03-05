<template>
  <div class='main-contact-text row col-lg-12 col-xs-12 justify-center'>
    <div class='contact-text row col-lg-12 col-xs-12 justify-center'>
      <p> Kontaktiere mich auf meinen Social Media Kanälen! </p>
    </div>
    <div class="row col-lg-2 col-xs-2">
      <hr class='divider'>
    </div>
    <div class="row col-lg-1 col-sm-2 col-xs-2">
      <div class='row col-lg-2 col-xs-2'>
        <a target="_blank" rel="noopener noreferrer" v-bind:href="instagramUrl">
          <font-awesome-icon class='social-media-icons instagram' :icon="['fab', 'instagram']" />
        </a>
      </div>
    </div>
    <div class="row col-lg-2 col-xs-2">
      <hr class='divider'>
    </div>
    <div class='email-text row col-lg-12 col-xs-10 justify-center'>
      <!-- Change your email here -->
      <p> oder per Mail an leon@tonhaeuser.cloud </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactPage',

  data(){
    return {
      // Change the url to your Facebook and Instagram page
      instagramUrl: 'https://www.instagram.com/leon.tonhaeuser'
    }
  },
}
</script>

<style>
template {
 overflow: 'hidden'
}

.main-contact-text{
  margin-top: 15%;
}

.contact-text{
  text-align: center;
  margin-bottom: 50px;
}

.divider{
  width: 350px;
  margin: 25px;
}

.social-media-icons{
  font-size: 50px;
  margin-left: 50px;
  margin-right: 50px;
  cursor: pointer;
}

.instagram{
  color: rgb(49,53,58);
}

.instagram:hover{
  color: black;
}

.email-text{
  margin-top: 50px;
  text-align: center;
}
</style>

