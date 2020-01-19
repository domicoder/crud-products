<template lang="pug">
  v-navigation-drawer(v-model="drawer", app, clipped, fixed)
    v-list(dense)
      v-list-item
        v-list-item-avatar
          v-img(:src="profileAvatar.avatar")
        v-list-item-content
          v-list-item-title
            | {{ profileAvatar.name }}
          v-list-item-subtitle
            | {{ profileAvatar.role }}
    v-divider
    v-list(dense)
      v-list-item(v-for="option in optionsMenu" :key="option.key", @click="", :to="option.path",
      :color="$route.path == option.path ? 'red' : 'black'").link
        v-list-item-icon
          v-icon(:color="$route.path == option.path ? 'red' : 'black'") {{ option.icon }}
        v-list-item-content
          v-list-item-title {{ option.name }}
</template>

<script>
export default {
  name: "Drawer",

  data: () => ({
    drawer: null
  }),

  mounted() {
    this.$root.$on("toggle-drawer", () => {
      this.toggleDrawer();
    });
  },

  computed: {
    profileAvatar() {
      return {
        name: "Yander Sanchez",
        role: "Administrator",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg"
      };
    },

    optionsMenu() {
      return [
        {
          icon: "mdi-home-variant",
          name: "Home",
          path: "/"
        },
        {
          icon: "mdi-view-module",
          name: "Category",
          path: "/category"
        },
        {
          icon: "mdi-food",
          name: "Products",
          path: "/products"
        },
        {
          icon: "mdi-help-circle",
          name: "About",
          path: "/about"
        }
      ]
    },
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
