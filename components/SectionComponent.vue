<template>
  <section class="wrapper text-center">
    <h1 class="fade-in-text">{{title}}</h1>
    <h3> {{subtitle}} </h3>
    <div>
      <b-button :class="btn.class" size="lg" :variant="btn.color" class="class-btn" v-for="btn, index in buttonConfig" :key="index">
        {{btn.label}}
      </b-button>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tilte'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    buttonConfig: {
      type: Array,
      default: []
    }
  },
  data: () => {
    return {

    }
  }
}
</script>
<style>

</style>
