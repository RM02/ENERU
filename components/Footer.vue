<template>
  <div class="footer text-center py-4">
    <b-col>
      <p>Design and build with <strong>Nuxt Js</strong></p>
      <p> EVA © {{ getYear }} </p>
    </b-col>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      year: null
    }
  },
  computed: {
    getYear() {
      let date = new Date().getFullYear();
      return date
    }
  }
}
</script>
<style scoped>
.footer {
  background: rgb(0, 16, 29);
  color: whitesmoke;
  bottom: 0;
  position: fixed;
  width: 100%;
}
</style>
