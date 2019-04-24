import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';

export default ({ store }, inject) => {
  Vue.use(VueNativeSock, `ws://${location.host}/logger`, {
    store,
    reconnection: true, // (Boolean) whether to reconnect automatically (false)
    reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)

    mutations: {
      SOCKET_ONOPEN:  'socket/SOCKET_ONOPEN',
      SOCKET_ONCLOSE: 'socket/SOCKET_ONCLOSE',
      SOCKET_RECONNECT: 'socket/SOCKET_RECONNECT',
      SOCKET_ONMESSAGE: 'socket/SOCKET_ONMESSAGE',
    }
  });
}
