<template>
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <Sidebar />
        <div class="layout-page">
          <Navbar />
          <div class="content-wrapper">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import Sidebar from './Sidebar.vue';
  import Navbar from './Navbar.vue';

  export default {
    components: {
      Sidebar,
      Navbar,
    },
  };
  </script>
