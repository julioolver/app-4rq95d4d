<template>
  <v-dialog v-model="controller.dialog" max-width="550px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" outlined class="mb-2" v-bind="attrs" v-on="on">
        Adicionar Produto
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
          <v-form
            lazy-validation
            v-model="controller.productForm"
            ref="productForm"
          >
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome"
                  v-model="controller.item.name"
                  dense
                  :rules="controller.requiredRule"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="controller.item.quantity"
                  :rules="controller.requiredRule"
                  label="Quantidade de estoque"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  :rules="controller.requiredRule"
                  v-model="controller.item.sku"
                  label="SKU"
                  dense
                >
                  <template v-slot:append>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="primary" dark v-bind="attrs" v-on="on">
                          mdi-information-variant
                        </v-icon>
                      </template>
                      <span>código único de identificação do produto</span>
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" outlined @click="controller.close()">
          Cancel
        </v-btn>
        <v-btn color="green darken-1" outlined @click="controller.save()">
          Save
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