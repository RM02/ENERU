<template>
  <header class="header">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">
        <img class="logo" src="logo.png">
      </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="three-dots">Menu</b-icon>
        <b-icon v-else icon="three-dots">Menu</b-icon>
      </template>
    </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="item, index in items" :key="index" class="mr-4">
            <a class="item" @click="navigate(item.path)">{{ item.name }}</a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    navigate(route) {
      this.$router.push({path: route})
    }
  }
}
</script>
