<template>
  <v-dialog v-model="controller.dialog" max-width="550px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" outlined class="mb-2" v-bind="attrs" v-on="on">
        Adicionar venda
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
        <v-container fluid class="mt-3">
          <v-form leazy-validation ref="saleForm" v-model="controller.saleForm">
            <v-row>
              <v-autocomplete
                v-model="controller.item.sku"
                :items="controller.items"
                outlined
                dense
                :rules="controller.requiredRule"
                :item-text="(item) => item.name + ' - ' + item.sku"
                item-value="sku"
                label="SKU"
              ></v-autocomplete>
              <v-col cols="12" md="12">
                <v-text-field
                  type="number"
                  :rules="controller.requiredRule"
                  v-model="controller.item.quantity"
                  label="Quantidade de venda"
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