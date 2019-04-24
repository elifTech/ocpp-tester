<template>

  <v-app>
    <v-toolbar app color="blue" dark>
      <v-container class="mx-auto" style="display: flex; align-items: center; padding: 0 24px;">
      <v-toolbar-title class="mr-4">
        OCPP Charging Point Tester
      </v-toolbar-title>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Central System URL"
        prepend-inner-icon="rss_feed"
        readonly :value="centralSystemUrl"
      ></v-text-field>
      </v-container>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>

</template>
<script>
  import Vue from 'vue';
  import { Prop } from 'vue-property-decorator';
  import Component from 'nuxt-class-component';

  export default @Component({
    name: 'DefaultLayout',
    components: {
    }
  })
  class DefaultLayout extends Vue {
    isOffcanvasOpen = false;

    get centralSystemUrl() {
      if (typeof location === 'undefined') {
        return;
      }
      return `${location.origin}/webServices/ocpp/{POINT ID}`;
    }
  }
</script>

