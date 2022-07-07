<template>
  <div>
      <Nuxt />
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
          path: "services"
        },
        {
          name: "Contactos",
          path: "contactos"
        }
      ]
    }
  }
}
</script>
