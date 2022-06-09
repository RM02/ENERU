<template>
  <div class="layout">
    <div class="screen">
      <video loop autoplay class="video-screen">
        <source src="/world-eneru.mp4" type="video/mp4">
      </video>
    </div>
    <div>
      <div class="block">
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="4">
              <img src="https://placekitten.com/300/300" alt="">
            </b-col>
            <b-col>
              <b-card-body>
                <b-card-text>
                <h1 class="title">
                    Acelera el crecimiento
                  <br> de tu empresa con nuestro equipo
                  </h1>

                  <div class="lines">
                    <div class="span3"></div>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <div class="block">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="4">
            <img src="https://placekitten.com/300/300" alt="">
          </b-col>
          <b-col>
            <b-card-body>
              <b-card-text>
                <h1 class="title">Interoperatividad entre organismos</h1>
                <h3 class="subtitle">Sobre nuestra plataforma intercambia información y conocimiento en el marco de tus procesos de negocio</h3>
                  <div class="lines">
                    <div class="span3"></div>
                  </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="block">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="4">
            <video loop autoplay class="class-video">
              <source src="/platform.mp4" type="video/mp4">
            </video>
          </b-col>
          <b-col>
            <b-card-body>
              <b-card-text>
                <h1 class="title">Interoperatividad entre organismos</h1>
                <h3 class="subtitle">Sobre nuestra plataforma intercambia información y conocimiento en el marco de tus procesos de negocio</h3>
                  <div class="lines">
                    <div class="span3"></div>
                  </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="block">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="4">
            <video loop autoplay class="class-video">
              <source src="/pdvc.mp4" type="video/mp4">
            </video>
          </b-col>
          <b-col>
            <b-card-body>
              <b-card-text>
                <h1 class="title">Calidad<br>en sistemas de gestión</h1>
                <h3 class="subtitle">Estandares ISO</h3>
                  <div class="lines">
                    <div class="span3"></div>
                  </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
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
  .layout {
    width: 100%;
    background: white;
  }
  .ph {
    display: flex;
  }
  .card {
    border: 0px
  }
  .class-video {
    padding-top: 100px;
    width: 100%;
    height: 100%;
  }
  .video-screen {
    width: 100%;
    height: auto;
  }
  .video-pv {
    margin-top: 40px;
    width: 80%;
    vertical-align: middle;
  }
  .span3 {
    height: 5px;
    width: 80%;
    margin-bottom: 5px;
    background: linear-gradient(to right,#fbff00 0%,#ff0000 100%);
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
    border-bottom: 5px solid rgb(241, 241, 241);
    padding: 100px;
    width: 100vw;
    height: 100%;
  }
  .title {
    font-size: 3.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(0, 40, 53);
  }
  .screen-title {
    font-size: 3.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(210, 210, 210);
    position: relative;
  }
  .subtitle {
    font-size: 1.5em;
    padding-top: 10px;

    padding-bottom: 10px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(100, 100, 100)
  }
@media screen and (max-width: 1200px)  {
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
    color: rgb(0, 5, 78);
  }
  .subtitle {
    padding-top: 10px;
    padding-bottom: 10px;

    font-size: 1.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(100, 100, 100)
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
