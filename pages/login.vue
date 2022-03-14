<template>
  <div class="wrapper">
    <div class="form">
      <h3 class="py-4 text-center">{{ getTitle }}</h3>
      <b-input v-model="credential.email" class="input mb-4" placeholder="Email"></b-input>
      <b-input v-model="credential.password" class="input mb-4" placeholder="Password"></b-input>
      <b-input v-if="isRegister" v-model="confirm" class="input mb-4" placeholder="Confirm Password"></b-input>
      <span v-if="!isConfirm && isRegister">Password does not match !</span>
      <div class="text-center my-4 ">
        <b-button variant="outline-light" class="mx-2" label="Save" @click="login">{{ isRegister ? 'Save': 'Log In'}}</b-button>
        <b-button v-if="isRegister" variant="outline-danger"> Cancel </b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      isRegister: false,
      credential: {},
      confirm: null
    }
  },
  computed: {
    isConfirm: function(value) {
      return (this.credential.password == this.confirm) ? true : false
    },
    getTitle: function () {
      return this.isRegister ? 'Register' : 'Log In'
    }
  },
  beforeMount () {
    this.isRegister = this.$route.params.isRegister
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', {data: this.credential})
        if (response.status == 200) {
          console.log(this.$auth)
          this.$router.push({path: '/'})
        }
      } catch {

      }
    }
  }
}
</script>
<style scoped>
.wrapper {
  background: black;
  padding: 100px;
  height: 100vh;
}
h3 {
  color:gold;
}
.form {
  margin: 0 auto;
  background: rgb(20, 20, 20);
  width: 500px;
  padding: 50px;
}
.input {
  background:rgb(15, 15, 15);
}
@media screen and (max-width: 500px) {
  .wrapper {
    width: 100%;
    padding: 0px;
    padding-top: 100px;
  }
  .form {
    background: rgb(0, 0, 0);
    width: 100%;
    padding: 50px
  }
}
</style>

