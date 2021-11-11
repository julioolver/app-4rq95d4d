<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-card-title class="pa-0">
          <v-toolbar dense color="primary" class="d-flex justify-center">
            <v-toolbar-title class="white--text">
              <span class="text-h5 white--text">Auditoria</span>
            </v-toolbar-title>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="controller.headers"
            :items="controller.audits"
            sort-by="id"
            class="elevation-1 mt-2"
            :loading="controller.loading"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Auditoria</v-toolbar-title>
              </v-toolbar>
            </template>
            <template v-slot:no-data>
              Sem informações para exibir.
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { auditoriaController } from "../di/di";

export default {
  data: (context) => ({
    controller: new auditoriaController(context),
  }),
  created() {
    this.controller.initialize();
  },
};
</script>

<style>
</style>