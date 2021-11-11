<template>
  <div class="pa-0">
    <v-text-field
      v-model="hora"
      v-mask="'##:##'"
      label="Hora"
      outlined
      class="ma-0"
      dense
    >
      <template v-slot:prepend>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-on="on" v-bind="attrs"> mdi-clock </v-icon>
          </template>
          <v-time-picker
            v-if="menu"
            v-model="hora"
            full-width
            format="24hr"
            @click:minute="$refs.menu.save(hora)"
          ></v-time-picker>
        </v-menu>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  data: (vm) => ({
    hora: vm.value,
    hora2: null,
    menu: false,
    teste: vm.value,
  }),

  watch: {
    // value() {
    //   this.hora = this.value;
    //   console.log(this.hora);
    // },
    hora() {
      this.$emit("input", this.hora);
    },
  },
};
</script>

<style>
</style>