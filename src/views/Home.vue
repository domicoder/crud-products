<template lang="pug">
  v-content()
    drawer
    toolbar
    v-content().pa-0
      v-container(fluid)
        v-layout().justify-center
          v-flex(shrink)
            router-view
    v-footer(app, color="blue" ).justify-center.pa-3
      div().white--text &copy; CRUD Products - {{ getActualYear }}
</template>

<script>
// @ is an alias to /src
import Drawer from "@/components/Drawer.vue";
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "home",

  components: {
    Drawer,
    Toolbar
  },

  computed: {
    getActualYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
