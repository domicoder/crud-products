<template lang="pug">
  v-layout(row, wrap)
    v-flex(sm12)
      v-card().mx-3.pa-2
        v-card-title
          | {{ isNewCategoryTitle }}
        v-container(fluid)
          v-layout(row, wrap).px-4
            v-flex(sm6).pr-1.py-2
              v-text-field(v-model="categories.name", :rules="[rules.ruleRequired]", type="text" , label="Name", color="info")
            v-flex(sm6).pl-1.py-2
              v-text-field(v-model="categories.code", :rules="[rules.ruleRequired]", type="number" , label="Code", color="info")
            v-flex(sm6).pr-1.py-2
              v-text-field(v-model="categories.image", :rules="[rules.ruleRequired]", outlined, prepend-icon="mdi-camera" type="file" , label="Image", color="info")
              //- v-file-input(v-model="categories.image", :rules="[rules.ruleRequired]", prepend-icon="mdi-camera", chips, multiple, label="Image", placeholder="Pick an image", color="info")
            v-flex(sm12).pl-1.py-2
              v-textarea(v-model="categories.description", :rules="[rules.ruleRequired]", label="Description", outlined, color="info")
            v-flex(sm12)
              v-btn(@click="", color="success", width="150", text, outlined).ma-1
                | Add category
              v-btn(@click="", color="error", width="150", text, outlined).ma-1
                | Cancel
</template>

<script>
import Rules from "@/utils/Rules.js";

export default {
  props: {
    id: String
  },

  data: () => ({
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
  }),

  computed: {
    isNew() {
      return this.id === "new";
    },

    isNewCategoryTitle() {
      switch (this.isNew) {
        case true:
          return "Category";
        case false:
          return "Categories";
        default:
          return "Not working";
      }
    }
  }

};
</script>
