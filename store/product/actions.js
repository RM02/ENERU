const product_service = '/article'

const actions = {
  get: function ({commit}, {self}) {
    return new Promise((resolve, reject) => {
      self.$axios.$get(`/api/articles`)
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  deleteArticle: function ({commit}, {self, id}) {
    return new Promise((resolve, reject) => {
      self.$axios.$delete(`/api/articles/${id}`)
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  newProduct: function ({commit}, {self, data}) {
    return new Promise((resolve, reject) => {
      self.$axios.$post(`/api/article/publish`, data, {
        header: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  getFile: function ({commit}, {self, filename}) {
    return new Promise((resolve, reject) => {
      self.$axios.$get(`/api/static/${filename}`, {
        headers: {
          'content-type': 'image/jpg'
        }
      })
      .then((res) =>{
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}
export default actions
