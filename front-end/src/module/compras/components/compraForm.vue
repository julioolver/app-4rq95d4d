<template>
  <v-dialog v-model="controller.dialog" max-width="550px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" outlined class="mb-2" v-bind="attrs" v-on="on">
        Adicionar Compra
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="pa-0">
        <v-toolbar color="primary" dense flat class="d-flex justify-center">
          <v-toolbar-title class="white--text">
            <span class="text-h5">{{ formTitle }}</span>
          </v-toolbar-title>
        </v-toolbar>
      </v-card-title>

      <v-card-text class="d-flex">
        <v-container fluid class="mt-2">
          <v-form lazy-validation ref="purchaseForm" v-model="controller.purchaseForm">
            <v-row>
              <v-col cols="12">
                <v-autocomplete
                  v-model="controller.item.sku"
                  :items="controller.items"
                  outlined
                  dense
                  :item-text="(item) => item.name + ' - ' + item.sku"
                  item-value="sku"
                  :rules="controller.requiredRule"
                  label="SKU"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field
                  type="number"
                  v-model="controller.item.quantity"
                  label="Quantidade de Compra"
                  :rules="controller.requiredRule"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" outlined @click="controller.close()">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" outlined @click="controller.save()">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz"],
    values: ["foo", "bar"],
    value: null,
  }),
  props: {
    controller: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formTitle() {
      return this.controller.formTitle();
    },
  },
  mounted() {
    this.controller.contextForm = this;
  },
};
</script>

<style>
</style>