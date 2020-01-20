<template lang="pug">
  v-layout(row, wrap)
    v-flex(sm12)
      v-card().mx-3.pa-2
        v-card-title
          v-text-field(v-model="search", append-icon="mdi-magnify", label="Search", single-line, hide-details, color="error")
        v-data-table(:headers="headers", :items="products", :search="search", color="info")
</template>

<script>
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
        text: "Price",
        value: "price",
        sortable: false
      },
      {
        text: "Quantity",
        value: "quantity",
        sortable: false
      },
      {
        text: "Category",
        value: "category",
        sortable: false
      },
      {
        text: "Entry Date",
        value: "entryDate",
        sortable: false
      }
    ],
    products: [
      {
        id: 1,
        name: "Manzana",
        code: 415475236,
        price: 10,
        quantity: 100,
        category: "Fruits",
        entryDate: "2020-01-20",
        image: ""
      },
      {
        id: 2,
        name: "Pera",
        code: 415555236,
        price: 10,
        quantity: 150,
        category: "Fruits",
        entryDate: "2020-01-20",
        image: ""
      }
    ]
  })
};
</script>
