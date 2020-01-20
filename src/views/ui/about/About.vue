<template lang="pug">
  v-layout(row, wrap)
    v-flex(sm12)
      v-card().mx-3.pa-2
        div(justify-center, align-center).py-5.text-center.font-weight-bold.title
          | CRUD Products
        v-alert(type="info", elevation-2, colored-border, border="top").pt-5
          | {{ about }}
          div().py-2.pt-2.font-weight-bold
            | Made by:
          div
            | Zardecs - Yander Sanchez
        div.text-center
          v-tooltip(bottom)
            template(v-slot:activator="{ on }")
              v-btn(href="https://github.com/zardecs", target="_blank", icon, v-on="on", color="info")
                v-icon mdi-github-circle
            span
              | Github - Zardecs
          v-tooltip(bottom)
            template(v-slot:activator="{ on }")
              v-btn(href="https://twitter.com/szyander", target="_blank"  icon, v-on="on", color="info")
                v-icon mdi-twitter
            span
              | Twitter - Yander Sanchez
</template>

<script>
export default {
  data: () => ({
    about: "This is a project show a CRUD to Products and respectives Categories. It were made in Vue JS, Vuetify and Router."
  })
};
</script>
