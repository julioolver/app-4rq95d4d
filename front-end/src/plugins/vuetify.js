import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#5E35B1",
        menu: "#5E35B1",
        secondary: "#EDE7F6",
        nav: "#FFFFFF",
        back_menu: "#FFFFFF",
        intra_text: "#000000",
        intra_table_card: "#f4f4f4",
        background: "#FFFFFF",
      },
      dark: {
        // primary: "#4D79BB",
        // primary: "#181E30",
        primary: "#283046",
        menu: "#283046",
        // secondary: "#303030",
        secondary: "#283046",
        nav: "#303030",
        back_menu: "#181E30",
        intra_text: "#ffffff",
        intra_table_card: "#33353d",
        background: "#181E30",
      },
    },
  },
  darkTheme: {
    background: "#181E30",
  },
});
