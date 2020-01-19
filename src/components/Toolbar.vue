<template lang="pug">
  v-app-bar(app, clipped-left, color="blue")
    v-app-bar-nav-icon(@click="$root.$emit('toggle-drawer')",).white--text
    v-toolbar-title().white--text
      | CRUD Products
</template>

<script>
export default {
  name: "Toolbar",
  data: () => ({})
};
</script>
