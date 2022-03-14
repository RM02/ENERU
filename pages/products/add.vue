<template>
  <div class="wrapper">
    <div>
      <h4>New</h4>
    </div>
    <div class="form-class">
      <div class="upload-class align-end">
        <img :src="temp_img" alt="">
      </div>
      <div class="form-class my-4">
        <b-form-file class="mb-4"
          browse-text="Upload"
          v-model="file"
          @change="pickupfile"
          placeholder="Choose a file"
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <b-input class="mb-4" placeholder="Name" v-model="model.name"></b-input>
        <b-input class="mb-4" placeholder="Description" v-model="model.description"></b-input>
        <b-input class="mb-4" placeholder="Price" type="number" v-model="model.price"></b-input>
        <b-input class="mb-4" placeholder="Category" v-model="model.category"></b-input>
      </div>

      <div class="text-center my-2">
        <b-button variant="success" @click="create">Save</b-button>
        <b-button variant="danger" @click="navigate('/products')">Cancel</b-button>
      </div>
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
  margin: 0 auto;
  padding: 30px;
}
.upload-class {
  height: 180px;
  width: 150px;
  margin: 0 auto
}
img {
  width: 150px;
  height: 180px;
  border-radius: 2em;
}
.form-class {
  margin: 0 auto;
  width: 75%;
  background: rgb(250, 250, 250);
}
@media screen and (max-width: 500px) {
  .form-class {
    width: 100%;
    background: none;
  }
  .wrapper {
    width: 100%;
    padding: 25px;
  }
}
</style>
