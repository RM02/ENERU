<template>
  <div class="layout">
    <div class="screen">
      <video loop autoplay class="video-screen">
        <source src="/world-eneru.mp4" type="video/mp4">
      </video>
    </div>
    <div class="block">
      <div>
        <h1 class="title">
          Acelera el crecimiento
        <br> de tu empresa con nuestro equipo
        </h1>
      </div>
      <div class="lines">
        <div class="span1"></div>
        <div class="span2"></div>
        <div class="span3"></div>
      </div>
    </div>
    <div class="block">
      <video loop autoplay class="class-video">
      <div>
        <h1 class="title">Visualizamos ser una empresa líder<br> a nivel nacional e internacional</h1>
        <h3 class="subtitle">Generando valor económico y social con nuestros productos y servicios</h3>
        <div class="lines">
          <div class="span1"></div>
          <div class="span2"></div>
          <div class="span3"></div>
        </div>
      </div>
        <source src="/screen.mp4" type="video/mp4">
      </video>
    </div>
    <div class="block">
      <h1 class="title">Interoperatividad entre organismos</h1>
      <h3 class="subtitle">Todos bajo un mismo ecosistema</h3>
      <div class="lines">
        <div class="span1"></div>
        <div class="span2"></div>
        <div class="span3"></div>
      </div>

      <div class="text-center">
        <video loop autoplay class="class-video">
          <source src="/platform.mp4" type="video/mp4">
        </video>
      </div>
      <div style="margin-top: 50px">
        <h3 class="subtitle">Sobre nuestra plataforma intercambia información y conocimiento en el marco de tus procesos de negocio</h3>
      </div>
    </div>
    <div class="block">
      <div class="ph">
          <div style="padding-right: 50px">
            <h1 class="title">Calidad<br> basado en sistemas de gestión</h1>
            <h3 class="subtitle">Estandares ISO</h3>
              <div class="lines">
                <div class="span1"></div>
                <div class="span2"></div>
                <div class="span3"></div>
              </div>
          </div>
          <div class="text-center">
            <video loop autoplay class="video-pv">
              <source src="/pdvc.mp4" type="video/mp4">
            </video>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Footer from '../components/Footer.vue';

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
  .layout {
    width: 100%;
    background: black;
  }
  .ph {
    display: flex;
  }
  .span1 {
    height: 5px;
    width: 160px;
    margin-bottom: 5px;
    background: linear-gradient(to right,#134285 0%,#65318f 100%);
  }
  .class-video {
    padding-top: 100px;
    width: 100%;
    height: auto;
  }
  .video-screen {
    width: 100%;
    height: auto;
  }
  .video-pv {
    margin-top: 40px;
    width: 70%;
  }
  .span2 {
    height: 5px;
    width: 350px;
    margin-bottom: 5px;
    background: linear-gradient(to right,#134285 0%,#65318f 100%);
  }
  .span3 {
    height: 5px;
    width: 500px;
    margin-bottom: 5px;
    background: linear-gradient(to right,#134285 0%,#65318f 100%);
  }
  .lines {
    margin-top: 20px;
    grid-template-rows: 5px 5px 5px;
  }
  .screen {
    height: 100%;
    width: 100%;
  }
  .block {
    border-bottom: 5px rgb(24, 24, 24) solid;
    padding: 100px;
    width: 100vw;
    height: 100%;
  }
  .title {
    font-size: 3.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(230, 230, 230);
  }
  .screen-title {
    font-size: 3.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(210, 210, 210);
    position: relative;
  }
  .subtitle {
    font-size: 2em;
    padding-top: 10px;

    padding-bottom: 10px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(130, 130, 130)
  }
@media screen and (max-width: 600px)  {
  .layout {
    width: 100%;
  }
  .screen {
    height: 100%;
    width: 100%;
  }
  .ph {
    display: inline-block;
  }
  .video-pv {
    margin-top: 40px;
    width: 100%;
  }
  .video-screen {
    width: 100%;
    height: auto;
  }
  .block {
    padding: 30px;
    padding-left: 30px;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    height: auto;
  }

  .context {
    background: rgb(0, 0, 0);
    height: 100vh;
    width: 100%;
  }

  .title {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.5em;
    color: rgba(245, 245, 245);
  }
  .subtitle {
    padding-top: 10px;
    padding-bottom: 10px;

    font-size: 1.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(130, 130, 130)
  }
  .span1 {
    height: 5px;
    width: 80px;
    margin-bottom: 4px;
    background: linear-gradient(to right,#134285 0%,#65318f 100%);
  }
  .span2 {
    height: 5px;
    width: 150px;
    margin-bottom: 4px;
    background: linear-gradient(to right,#134285 0%,#65318f 100%);
  }
  .span3 {
    height: 5px;
    width: 250px;
    margin-bottom: 4px;
    background: linear-gradient(to right,#134285 0%,#65318f 100%);
  }
  .lines {
    display: block;
  }
  .class-btn {
    position: relative;
    top: 45vh;
    float:inline-start
  }
}
</style>
