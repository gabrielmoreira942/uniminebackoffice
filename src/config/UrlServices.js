import Api from './Api'

export default {
    get() {
        return new Promise(resolve => {
            Api.get('/url')
                .then(({data}) =>{
                    resolve(data)
                })
        })
    }

}
   