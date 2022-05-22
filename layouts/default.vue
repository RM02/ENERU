<template>
  <div class="layout">
    <Header :items="items"/>
      <Nuxt />
    <Footer/>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      items: [
        {
          name: "Productos",
          path: "productos"
        },
        {
          name: "Servicios",
          path: ""
        },
        {
          name: "Contactos",
          path: ""
        }
      ]
    }
  }
}
</script>
<style scoped>
.layout {
  width: 100vw;
  background: #000;
}

@media screen and (max-width: 500px)  {
  .layout {
    width: 100vw;
    background: #000;
  }
}

</style>
