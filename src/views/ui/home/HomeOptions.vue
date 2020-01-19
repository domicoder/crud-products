<template lang="pug">
    v-layout(row, wrap)
      v-flex(v-for="(option, index) in options", :key="index", :class="optionsLength < 3 ? 'sm6' : 'sm4'").pa-2
        v-tooltip(bottom)
          span {{ "Siiiiiiii" }}
        v-card(:to="option.to").link
          v-img(:src="option.image")
          v-card-title
            | {{ option.title }}
          v-card-subtitle
            | {{ option.subtitle }}
</template>

<script>
export default {
  name: "HomeOptions",
  data: () => ({}),

  computed: {
    options() {
      return [
        {
          title: "Add Category",
          subtitle: "Open categories window.",
          image: "https://i.picsum.photos/id/50/400/400.jpg",
          to: "/category"
        },
        {
          title: "Add Product",
          subtitle: "Open products window.",
          image: "https://i.picsum.photos/id/51/400/400.jpg",
          to: "/products"
        }
      ]
    },

    optionsLength() {
      return this.options.length;
    }
  }
}
</script>