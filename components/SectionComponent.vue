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
.wrapper {
  background: black;
  height: 100vh;
  width: 100vw;
}

h3 {
  font-family: "nudista-web", Helvetica,Arial,sans-serif;
  font-size: 2em;
  top: 38vh;
  color: gray;
  position: relative;
}
.class-btn {
  position: relative;
  top: 45vh;
  float:inline-start
}
.fade-in-text {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 4em;
  color: rgba(245, 245, 245);
  display: inline-block;
  font-style: normal;
  position: relative;
  top: 35vh;
  animation: fadeIn linear 7s;
  -webkit-animation: fadeIn linear 7s;
  -moz-animation: fadeIn linear 7s;
  -o-animation: fadeIn linear 7s;
  -ms-animation: fadeIn linear 7s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>
