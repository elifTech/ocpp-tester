<template>

  <div class="log-list">
    <div class="log-message" v-for="message in list">{{message}}</div>
    <div id="endOfList"></div>
  </div>

</template>
<style lang="scss">
  .log-list {
    border: 1px solid #666;
    max-height: 400px;
    overflow: auto;

    .log-message {
      font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
      padding: 5px 0;
      border-bottom: 1px dashed #AAA;
    }
  }
</style>
<script>
  import Vue from 'vue';
  import { Watch, Prop } from 'vue-property-decorator';
  import Component from 'nuxt-class-component';

  export default @Component({
    components: {}
  })
  class LogList extends Vue {
    @Prop(Array) list;

    mounted() {
      this.onMessagesChange();
    }

    @Watch('list')
    onMessagesChange() {
      this.$vuetify.goTo('#endOfList', {
        container: '.log-list',
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      });
    }
  }
</script>
