<style lang="sass">
@import "../utils/common.scss"
</style>
<template>
  <div>
    <box :images="images"></box>
  </div>
</template>
<script>
// import slider from '../components/slider'
// import slideritem from '../components/slider_item'
import {Box} from '../../dist/module.js'
var images = []
for(var i=0;i<12;i++){
images.push('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3835697576,1221857629&fm=26&gp=0.jpg')
}
export default {
  el: '#box1',
  data () {
    return {
      images
      
    }
  },
  mounted () {
   
  },
  components: {
    Box
  },
  methods: {
    
  }
}
</script>