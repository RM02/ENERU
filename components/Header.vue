<template>
  <div class="header">
    <b-navbar toggleable="lg">
      <b-navbar-nav>
        <b-nav-item class="item mr-2" @click="navigate('/')">
          <span class="sufix">EVA</span>
        </b-nav-item>

        <b-nav-item v-for="item, index in items" :key="index" class="mr-2" @click="navigate(item.path)">
          <span class="item">{{ item.name }}</span>
        </b-nav-item>
        <b-nav-item>
          <span class="account">Menu</span>
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

.header {
  position: fixed;
  top: 0;
  background: none;
  color: aliceblue;
  width: 100%;
  background: rgb(15, 15, 15);
}
.sufix {
  color: white;
  border-bottom: 1px solid gold;
}
.account {
  color: gray;
  position: absolute;
  right: 0;
  padding-right: 10px;
  font-weight: bold;
}
.item {
  color: gray;
  font-weight: bold;
}
@media screen and (max-width: 500px)  {
  .header {
    padding: 0px;
    position: fixed;
    top: 0;
    background: rgb(35, 35, 35);
    color: aliceblue;
    width: 500px;
  }
  .account {
    position: fixed;
    top: 2.5vh
  }
}
</style>
