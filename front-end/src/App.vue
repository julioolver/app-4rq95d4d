<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <div style="border: 2px solid black" class="v-flex">
      <v-app-bar rounded="md" app color="menu" dark>
        <v-app-bar-nav-icon
          @click="drawer = true"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          {{ $vuetify.breakpoint.width }}
        </v-toolbar-title>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>

        <v-spacer></v-spacer>

        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        class="hidden-md-and-up"
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <template v-for="menu in itemsMenu">
              <v-list-item :to="menu.to" :key="menu.to">
                <v-list-item-icon>
                  <v-icon>{{ menu.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div class="pt-6" :class="{ tipoMenu: $vuetify.breakpoint.width > 959 }">
      <v-toolbar
        class="mx-9 v-flex hidden-sm-and-down d-sm-none d-md-flex"
        color=""
        rounded="lg"
      >
        <v-toolbar-items>
          <v-btn text @click="$vuetify.theme.dark = !$vuetify.theme.dark"
            >Dark Theme</v-btn
          >
          <template v-for="menu in itemsMenu">
            <v-btn :to="menu.to" text :key="menu.to">
              <v-icon>{{ menu.icon }}</v-icon>
              <span class="mr-1">{{ menu.name }}</span>
            </v-btn>
          </template>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-main class="mx-6 mt-10">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    group: false,
    drawer: false,
    itemsMenu: [
      {
        to: "produtos",
        icon: "mdi-shopping",
        name: "Produtos",
      },
      {
        to: "compras",
        icon: "mdi-cart-arrow-down",
        name: "Compras",
      },
      {
        to: "vendas",
        icon: "mdi-cart-arrow-up",
        name: "Vendas",
      },
    ],
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style>
.tipoMenu {
  z-index: 3;
  position: sticky;
  top: 4rem;
  /* border: 5px solid red; */

  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: var(--v-back_menu-base);
}

.background-light {
  background-image: linear-gradient(
    rgba(248, 248, 248, 0.95) 44%,
    rgba(248, 248, 248, 0.46) 73%,
    rgba(255, 255, 255, 0)
  );
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
}

.background-dark {
  background-image: linear-gradient(
    rgba(22, 29, 49, 0.9) 44%,
    rgba(22, 29, 49, 0.43) 73%,
    rgba(22, 29, 49, 0)
  );
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}
.slide-leave-active {
  animation: slid-out 0.3s ease;
}
</style>
