<template>
  <div>
    <Header :items="items"/>
    <Nuxt />
    <Footer/>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      items: []
    }
  }
}
</script>
<style scoped>

</style>
