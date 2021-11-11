<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-card-title class="pa-0">
          <v-toolbar dense color="primary" class="d-flex justify-center">
            <v-toolbar-title class="white--text">
              <span class="text-h5 white--text">vendas</span>
            </v-toolbar-title>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="controller.headers"
            :items="controller.sales"
            sort-by="calories"
            :loading="controller.loading"
            class="elevation-1 mt-2"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>vendas</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <venda-form :controller="controller" />
                <v-dialog v-model="controller.dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >Tem certeza que deseja remover este item?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="red"
                        outlined
                        @click="controller.closeDelete"
                        >Cancelar</v-btn
                      >
                      <v-btn
                        color="green darken-1"
                        outlined
                        @click="controller.deleteItemConfirm"
                        >Confirmar</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="controller.editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="controller.deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="controller.initialize">
                Reset
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
    <snackbar
      v-if="controller.showSnack"
      :data="controller.snackData"
      v-model="controller.showSnack"
    />
  </div>
</template>

<script>
import { vendaController } from "../di/di";
import vendaForm from "../components/vendaForm.vue";
import Snackbar from '../../../components/snackbar/Snackbar.vue';

export default {
  components: { vendaForm, Snackbar },
  data: (context) => ({
    controller: new vendaController(context),
  }),

  watch: {
    "controller.dialog": function (val) {
      val || this.controller.close();
    },
    "controller.dialogDelete": function (val) {
      val || this.controller.closeDelete();
    },
  },

  created() {
    this.controller.initialize();
  },
};
</script>

<style>
</style>