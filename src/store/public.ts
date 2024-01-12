import { defineStore, acceptHMRUpdate } from 'pinia';

export const global = defineStore('global', {
  state: () => {
    return {
      active: 0
    };
  },
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage
      }
    ]
  }
});

const getItems = (item) => {
  let local = localStorage.getItem('publicStore');
  let localObj = JSON.parse(local);
  return localObj && localObj[item] ? localObj[item] : null;
};
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(global, import.meta.hot));
}
