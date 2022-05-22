<template>
  <div class="wrapper">
    <div class="block">
      <h1 class="title">Productos</h1>
      <h3 class="subtitle">Gestión contable</h3>
      <img src="/eneru.png" alt="">
    </div>
    <div class="block">
      <h3 class="subtitle">PatriaSalud</h3>
      <img src="/patria.png" alt="">
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: () => {
    return {
      model: {},
      file: null,
      temp_img: null
    }
  },
  methods: {
    ...mapActions('product', ['newProduct']),
    buildModel (data) {

      return data
    },
    async pickupfile (e) {
      var file = e.target.files[0]
      this.file = file
      /* create a reader */
      const readData = (f) =>  new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
          reader.addEventListener('load', async () => {
            this.temp_img = reader.result
          })
      });

      /* Read data */
      const data = await readData(file);
    },
    create() {
      let model = this.buildModel(this.model)

      if (!this.file) {
        const formData = new FormData();
          formData.append('file', this.file)
      }
      this.newProduct({
        self: this,
        data: this.model
      })
      .then((res) => {
        console.log(res)
      })
    },
    navigate(name) {
      this.$router.push({path: name})
    }
  }
}
</script>
<style scoped>
.wrapper {
    width: 100%;
    background: black;
}
  img {
    width: 100%;
    height: 400px;
  }
  .title {
    font-size: 3.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(230, 230, 230);
  }
  .subtitle {
    font-size: 2em;
    padding-top: 10px;

    padding-bottom: 10px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(130, 130, 130)
  }
  .block {
    border-bottom: 5px rgb(24, 24, 24) solid;
    padding: 100px;
    padding-top: 20px;;
    width: 100vw;
    height: 100%;
  }
  .media {
    padding: 30px;
    padding-left: 30px;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    height: auto;
  }
@media screen and (max-width: 500px) {
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
  img {
    width: 100%;
    height: 400px;
  }
  .block {
    padding: 20px;
    padding-left: 30px;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    height: auto;
  }
}
</style>
