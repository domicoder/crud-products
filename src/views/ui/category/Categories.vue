<template lang="pug">
  v-layout(row, wrap)
    v-flex(sm12)
      v-card().mx-3.pa-2
        v-card-title
          v-text-field(v-model="search", append-icon="mdi-magnify", label="Search", single-line, hide-details, color="error")
        v-data-table(:headers="headers", :items="categories", :search="search", color="info")
</template>

<script>
import Rules from "@/utils/Rules.js";

export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Name",
        value: "name",
        sortable: false
      },
      {
        text: "Code",
        value: "code",
        sortable: false
      },
      {
        text: "Description",
        value: "description",
        sortable: false
      }
    ],
    categories: [
      {
        name: "Fruits",
        code: 951475236,
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1502826406%2F1708w-getty-fruit-closeup-CarstenSchanter-EyeEm.jpg%3Fitok%3DXFE9vQPZ&w=400&c=sc&poi=face&q=85",
        description: "Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum."
      },
      {
        name: "Electronics",
        code: 963158742,
        image: "http://newsobtain.com/wp-content/uploads/2019/11/global-consumer-electronics-market.jpg",
        description: "Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum."
      }
    ],
    category: [],
    rules: { ...Rules }
  })
};
</script>
