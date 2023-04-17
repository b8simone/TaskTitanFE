<template>
    <main>
      <h1>Warehouse</h1>
  
      <div class="tabs">
        <router-link class="router_link" to="/warehouse">Dashboard</router-link>
        <router-link class="router_link" to="/warehouse/products">Products</router-link>
      </div>
  
      <div class="view">
        <RouterView />
      </div>
    </main>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  
  export default {
    name: 'Component Name',
    props: {},
    data() {
      return {}
    }
  }
  
  </script>
  
  <style scoped>
  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  
  .tabs {
    position: relative;
    top: 0;
    right: 0;
    width: 87%;
    min-height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
  }
  
  .tabs .router_link {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-top: 1px solid var(--blue2);
    border-right: 1px solid var(--blue2);
    border-left: 1px solid var(--blue2);
    padding: .5rem 1rem;
  }
  
  .view {
    width: 95%;
    border-top: 1px solid var(--blue2);
  }
  
  .router-link-exact-active {
    background-color: var(--blue3);
  }
  
  </style>
  