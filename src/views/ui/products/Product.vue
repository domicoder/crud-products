<template lang="pug">
  v-layout(row, wrap)
    v-flex(sm12)
      v-card().mx-3.pa-2
        v-card-title
          | Product
        v-container(fluid)
          v-layout(row, wrap).px-4
            v-flex(sm6).pr-1.py-2
              v-text-field(v-model="product.name", :rules="[rules.ruleRequired]", type="text" , label="Name", color="info")
            v-flex(sm6).pl-1.py-2
              v-text-field(v-model="product.code", :rules="[rules.ruleRequired]", type="number" , label="Code", color="info")
            v-flex(sm6).pr-1.py-2
              v-text-field(v-model="product.price", :rules="[rules.ruleRequired]", type="number" , label="Price", color="info")
            v-flex(sm6).pl-1.py-2
              v-text-field(v-model="product.quantity", :rules="[rules.ruleRequired]", type="number" , label="Quantity", color="info")
            v-flex(sm6).pr-1.py-2
              v-select(v-model="product.category", :rules="[rules.ruleRequired]", label="Category", color="info")
            v-flex(sm6).pl-1.py-2
              v-dialog( v-model="datePickerModal", ref="dialogDatePicker", :return-value.sync="product.entryDate", persistent, width="290")
                template(v-slot:activator="{on}")
                  v-text-field(v-model="product.entryDate", v-on="on", prepend-icon="mdi-calendar", persistent-hint)
                v-date-picker(v-model="product.entryDate", no-title, scrollable, :max="new Date().toISOString().substr(0, 10)")
                  v-spacer
                  v-btn(@click="datePickerModal = false", color="error", text)
                    | Cancel
                  v-btn(@click="$refs.dialogDatePicker.save(product.entryDate)", color="info", text)
                    | OK
            v-flex(sm6).pr-1.py-2
              v-text-field(v-model="product.image", :rules="[rules.ruleRequired]", outlined, prepend-icon="mdi-camera" type="file" , label="Image", color="info")
              //- vFileInput - Error Vue ^2.6.10, when v-model is null
              //- v-file-input(v-model="product.image", :rules="[rules.ruleRequired]", prepend-icon="mdi-camera", chips, multiple, label="Image", placeholder="Pick an image", color="info")
            v-flex(sm12)
              v-btn(@click="", color="success", width="150", text, outlined).ma-1
                | Add product
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
    datePickerModal: false,
    datePicker: new Date().toISOString().substr(0, 10),
    date: "",
    product: {},
    rules: { ...Rules }
  }),

  mounted() {
    if (!this.isNew) {
      this.product = this.getProductById(Number(this.id));
    }
  },

  methods: {
    formatDate(datePicker) {
      if (!datePicker) return null;
      const [year, month, day] = datePicker.split("-");
      return `${day}-${month}-${year}`;
    },

    getProductById(id) {
      switch (id) {
        case 1:
          return {
            id: 1,
            name: "Manzana",
            code: 415475236,
            price: 10,
            quantity: 100,
            category: "Fruits",
            entryDate: "2020-01-20",
            image: ""
          };
        case 2:
          return {
            id: 2,
            name: "Pera",
            code: 951444436,
            price: 90,
            quantity: 150,
            category: "Fruits",
            entryDate: "2020-01-20",
            image: ""
          };
      }
    }
  },

  computed: {
    isNew() {
      return this.id === "new";
    },

    computedDateFormatted() {
      return this.formatDate(this.datePicker);
    }
  }
};
</script>
