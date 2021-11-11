<template>
  <v-snackbar v-model="snackbar" :color="data.color" :timeout="data.timeout">
    {{ data.text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: (vm) => ({
    snackbar: vm.value,
  }),
  watch: {
    snackbar() {
      this.$emit("input", false);
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
</style>