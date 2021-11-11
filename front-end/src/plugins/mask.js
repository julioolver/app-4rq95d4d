import Vue from 'vue'

// usar o plugin
import VueMask from 'v-mask'
Vue.use(VueMask);

// usar a diretiva
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

// usar apenas o filtro
import { VueMaskFilter } from 'v-mask'
Vue.filter('VMask', VueMaskFilter)