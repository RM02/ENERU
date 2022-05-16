<template>
  <div class="header">
    <b-navbar toggleable="lg">
      <b-navbar-nav>
        <b-nav-item class="item mr-2" @click="navigate('/')">
        <img class="logo" src="logo.png">
        </b-nav-item>

        <b-nav-item v-for="item, index in items" :key="index" class="mr-2" @click="navigate(item.path)">
          <span class="item">{{ item.name }}</span>
        </b-nav-item>
        <b-nav-item>

        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
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
<style scoped>
.logo {
  padding-left: 10px;
  height: 30px;
  width: 50px;
}
.header {
  position: sticky;
  top: 0;
  background: none;
  color: aliceblue;
  width: 100%;
  background: rgb(5, 5, 5);
}

.item {
  color: gray;
  font-weight: bold;
}
@media screen and (max-width: 500px)  {
  .header {
    padding: 0px;
    position: sticky;
    top: 0;
    background: rgb(10, 10, 10);
    color: aliceblue;
    width: 100%;
  }
}
</style>
