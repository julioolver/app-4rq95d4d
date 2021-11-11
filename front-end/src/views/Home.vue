<template>
  <v-card class="mx-auto d-flex justify-center text-center" max-width="644">
    <v-card-text >
      <div>Feito por</div>
      <p class="text-h4 text--primary">Julio Cesar Oliveira</p>
      <div class="text--primary text-h6">
        projeto realizado com Vue.JS e Vuetify no front-end, back-end utilizado o Laravel 8.<br>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="teal accent-4" target="_blank" icon href="https://www.linkedin.com/in/julio-cesar-oliveira-da-silva-957593169/" _blank>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
