export const state = () => ({
  logMessages: []
});

export const mutations = {
  SOCKET_ONOPEN(state, event) {
    console.info('open', event)
  },
  SOCKET_ONCLOSE(state, event) {
    console.info('close', event)
  },
  SOCKET_RECONNECT(state, event) {
    console.info('reconnect', event)
  },
  SOCKET_RECONNECT_ERROR(state, event) {
    console.info('reconnect error', event)
  },
  SOCKET_ONERROR(state, event) {
    console.info('error', event)
  },
  SOCKET_ONMESSAGE(state, event) {
    console.info('message', event.data)
    try {
      const message = JSON.parse(event.data);
      if (message.command === 'history') {
        state.logMessages = message.messages;
      } else if (message.command === 'message') {
        state.logMessages.push(message.message);
      }
    } catch (err) {

    }
  }
};

export const actions = {
  async exampleAction({ state, commit }) {
    let data;
    commit('setLoading', true);
    commit('setError', false);
    try {
      //   data = await this.$axios.$get(`${this.config.binderPath}/some-url`);
      //   commit('setData', data);
    } catch (err) {
      commit('setError', true);
    }
    commit('setLoading', false);
    return data;
  }
};
