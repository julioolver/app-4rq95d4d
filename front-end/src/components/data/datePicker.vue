<template>
  <div>
    <v-text-field
      v-model="data"
      label="Data do Evento"
      max-width="500"
      outlined
      dense
      :rules="[v => !!v || 'Required']"
      @blur="formataData"
      v-mask="'##/##/####'"
    >
      <template v-slot:prepend>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on"> mdi-calendar </v-icon>
          </template>
          <v-date-picker
            v-if="menu2"
            v-model="picker"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
      </template>
    </v-text-field>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    value: {
      type: String,
    },
  },
  data: (vm) => ({
    data: moment(vm.value, "YYYY-MM-DD").format("DD/MM/YYYY"),
    picker: null,
    menu2: false,
  }),

  watch: {
    value() {
      console.log(moment(this.value, "YYYY-MM-DD").format("DD/MM/YYYY"));
      console.log('aq');
      this.data = moment(this.value, "YYYY-MM-DD").format("DD/MM/YYYY")
    },
    picker() {
      this.data = moment(this.picker, "YYYY-MM-DD").format("DD/MM/YYYY");
      this.$emit("input", this.picker);
    },
    // data() {
    //   this.date = this.picker.split("/").reverse().join("-");
    // },
  },
  computed: {
    format() {
      return "DD/MM/YYYY";
    },
    mask() {
      return "dia-mes-ano";
    },
  },
  methods: {
    formataData() {
      if (this.data) {
        let dia, mes, ano;

        [dia, mes, ano] = this.data.split("/");
        let d = dia;
        let m = mes;
        let y = ano;
        if (!dia || dia == "") {
          d = 1;
        }
        if (!mes || mes == "") {
          m = moment().month() + 1;
        }
        if (!ano || ano == "") {
          y = moment().year();
        }
        const data = moment(`${d}/${m}/${y}`, "DD/MM/YYYY").format(
          "DD/MM/YYYY"
        );
        if (moment(data, this.format, true).isValid()) {
          this.picker = moment(data, this.format).format("YYYY-MM-DD");
          this.data = moment(this.picker, "YYYY-MM-DD").format("DD/MM/YYYY");
          this.$emit("input", this.picker);
        } else {
          this.data = null;
          this.$emit("input", null);
        }
      } else {
        this.$emit("input", null);
      }
    },
  },
};
</script>

<style>
</style>