import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: () => ({
      sitename: 'LEON TONHÄUSER',
      isMobile: null,
      currentShowcaseName: 'mtvbarum',

      showcases: [
        {
          showcaseName: 'mtvbarum',
          sportName: 'MTV Barum',
          instagramName: 'mtvbarum',
          photos: [{photo: 'mtv_1.jpg', orientation: 'L'},
                   {photo: 'mtv-2.jpg', orientation: 'P'},
                   {photo: 'mtv-az-1.jpg', orientation: 'P'},
                   {photo: 'mtv-ii-1.jpg', orientation: 'P'}]
        },
        {
          showcaseName: 'svg_lueneburg',
          sportName: 'SVG Lüneburg',
          instagramName: 'svg_lueneburg',
          photos: [{photo: 'svg-1.jpg', orientation: 'L'},
                   {photo: 'svg-2.jpg', orientation: 'P'},
                   {photo: 'svg-3.jpg', orientation: 'P'}]
        }
      ]
    }),
    getters: {
      isMobile: state => {
        return state.isMobile
      },

      getShowcase: (state) => {
        for (var i = 0; state.showcases.length; i++){
          if (state.showcases[i].showcaseName == state.currentShowcaseName){
            return state.showcases[i]
          }
        }
      },

      getSitename: (state) => {
        return state.sitename
      }
  },
  mutations: {
    setIsMobile (state, isMobile){
      state.isMobile = isMobile
    },

    setCurrentShowcaseName (state, showcaseName){
      state.currentShowcaseName = showcaseName
    }
  }
})