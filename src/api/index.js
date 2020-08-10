import axios from 'axios'
const API_URL = "http://127.0.0.1:5000/"

export default class HomeModel {
    static async fetchHome() {
        try {
            let request = await axios.get(`${API_URL}api/home`)
            return request
        }
        catch(err){
            console.log(err)
        }
    }
    static addLight(){
        let request = axios.post(`${API_URL}api/home`)
        return request
    }

    static deleteLastLigth() {
        let request = axios.delete(`${API_URL}api/home/lights`)
        return request
    }

    static removeLight(data) {
        let request = axios.delete(`${API_URL}api/home/lights/${data}`)
        return request
    }

    static toggleLight(data) {
        let request = axios.put(`${API_URL}api/home/lights/toggle/${data}`)
        return request
    }
    static  setTempature(data) {
            let request = axios.put(`${API_URL}api/home/tempature`,data)
            return request
    }
}
