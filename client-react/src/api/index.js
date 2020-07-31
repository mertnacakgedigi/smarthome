import axios from 'axios'

export default class HomeModel {
    static async fetchHome() {
        try {
            let request = await axios.get(`api/home`)
            return request
        }
        catch(err){
            console.log(err)
        }
    }
    static addLight(){
        let request = axios.post(`api/home`)
        return request
    }

    static deleteLastLigth() {
        let request = axios.delete(`api/home/lights`)
        return request
    }

    static removeLight(data) {
        let request = axios.delete(`api/home/lights/${data}`)
        return request
    }

    static toggleLight(data) {
        let request = axios.put(`api/home/lights/toggle/${data}`)
        return request
    }
    static  setTempature(data) {
            let request = axios.put(`api/home/tempature`,data)
            return request
    }
}
