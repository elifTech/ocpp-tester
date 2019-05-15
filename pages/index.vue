<template>
  <div class="container p-lg-top-bottom">

    <v-btn @click="send('BootNotification')">BootNotification</v-btn>
    <v-btn @click="send('DiagnosticsStatusNotification')">DiagnosticsStatusNotification</v-btn>
    <v-btn @click="send('FirmwareStatusNotification')">FirmwareStatusNotification</v-btn>
    <v-btn @click="send('Heartbeat')">Heartbeat</v-btn>
    <v-btn @click="send('StatusNotification')">StatusNotification</v-btn>

    <v-divider></v-divider>
    <br/>

    <v-flex xs12 sm6>
      <v-text-field
          label="ConnectionID"
          single-line v-model="connectorId"
      ></v-text-field>
    </v-flex>

    <v-btn @click="send('MeterValues')">MeterValues</v-btn>
    <v-btn @click="send('StartTransaction')">Start transaction</v-btn>
    <v-btn @click="send('StopTransaction')">Stop transaction</v-btn>

    <v-divider></v-divider>
    <br/>
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

    connectorId = '';

    mounted () {
    }

    send(command) {
      this.$socket.send(JSON.stringify([command, this.connectorId]))
    }
  }
</script>
