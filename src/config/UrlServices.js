import Api from './Api'

export default {
    get() {
        return new Promise(resolve => {
            Api.get('/url')
                .then(({ data }) => {
                    resolve(data)
                })
        })
    },
    delete(id) {
        return new Promise(resolve => {
            Api.delete(`/url/${id}`)
                .then(({ data }) => {
                    resolve(data)
              })
        })
    }

}
