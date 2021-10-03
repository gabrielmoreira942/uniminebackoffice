<template>
</template>

<script>
  import SideBar from '../components/SideBar.vue'
  export default {
    components:{
      SideBar
    },

    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>
