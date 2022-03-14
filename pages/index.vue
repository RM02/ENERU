<template>
  <div class="layout" fluid>
    <section>
      <SectionComponent :title="'EVA'" :subtitle="'Evolution Vision Action'" :buttonConfig="buttonConfig"/>
    </section>
    <section id="Products">
      <SectionComponent :title="'Products'" :subtitle="'High Technologies Applied'"/>
    </section>
    <section id="Services">
      <SectionComponent :title="'Services'" :subtitle="'Low Cost Solutions'"/>
    </section>
    <section id="Contact Us">
      <SectionComponent :title="'Contact Us'" :subtitle="'Our team is ready to support'"/>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => {
    return {
      data: [],
      buttonConfig: [{
        label: 'Buy now',
        class: 'mr-4',
        color: 'warning'
      },
      {
        label: 'Register',
        color: 'light'
      }],
      show: true
    }
  },
  name: 'IndexPage',
  layout: 'default',
  mounted () {
    // this.getData()
  },
  methods: {
    ...mapActions('product', ['get', 'deleteArticle']),

    getData() {
      this.get({
        self: this
      })
        .then((res) => {
          if (res.status == 200) {
            this.data = res.result
          }
        })
    },
    navigate(route) {
      this.$router.push({name: route})
    },
    buy() {

    }

  }
}
</script>
<style scoped>

@media screen and (max-width: 500px)  {

  .layout {
    width: 100%;
  }

  .context {
    background: rgb(0, 0, 0);
    height: 100vh;
    width: 100%;
  }

  .title h3 {
    font-family: "nudista-web", Helvetica,Arial,sans-serif;
    font-size: 1.2em;
    color: white;
    position: relative;
    top: 30vh;
  }
  .title h1 {
    text-align: center;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.7em;
    top: 28vh;
    color: rgba(245, 245, 245);
    border-bottom: 2px solid;
    border-color: gold;
    font-style: normal;
    position: relative;
  }
  .class-btn {
    position: relative;
    top: 45vh;
    float:inline-start
  }
}
</style>
