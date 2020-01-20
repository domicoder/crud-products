<template lang="pug">
    v-layout(row, wrap, shrink)
      v-flex(v-for="(option, index) in options", :key="index", :class="optionsLength < 3 ? 'sm6' : 'sm4'").pa-2
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
  data: () => ({
    options: [
      {
        title: "Add Category",
        subtitle: "Open categories window.",
        image: "https://i.picsum.photos/id/50/400/400.jpg",
        to: "/category/new"
      },
      {
        title: "Add Product",
        subtitle: "Open products window.",
        image: "https://i.picsum.photos/id/51/400/400.jpg",
        to: "/product/new"
      }
    ]
  }),

  computed: {
    optionsLength() {
      return this.options.length;
    }
  }
};
</script>
