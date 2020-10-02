<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'
export default {
  name: 'App',
  components: {
    AuthLayout,
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout: function() {
      return ((this.$route.meta.layout || 'empty') + '-layout')
    }
  }
}
</script>