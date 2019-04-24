<template>
  <div class="container p-lg-top-bottom">

    Log:
    <log-list :list="logMessages"></log-list>

  </div>
</template>
<style>
  .log-message {
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    padding: 5px 0;
    border-bottom: 1px dashed #AAA;
  }
</style>
<script>
  import Vue from 'vue';
  import Component, { namespace } from 'nuxt-class-component';
  import LogList from '~/components/LogList';

  const { State, Mutation, Action } = namespace('socket');

  export default @Component({
    components: {
      LogList
    },
    head: {
      title: 'Welcome'
    }
  })
  class IndexPage extends Vue {
    @State logMessages;

    mounted () {
    }
  }
</script>
