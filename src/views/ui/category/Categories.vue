<template lang="pug">
  v-layout(wrap, row)
    v-flex(sm12)
      v-select(v-model="category" , :items="categories", item-text="name", label="Category", color="blue", prepend-inner-icon="mdi-delete", solo)
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        name: "Fruits",
        description: "Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum."
      },
      {
        name: "Electronics",
        description: "Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum."
      }
    ],
    category: []
  })
};
</script>
