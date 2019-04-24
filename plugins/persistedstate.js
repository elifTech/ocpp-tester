import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    key: 'tester',
    paths: []
  })(store);
};
