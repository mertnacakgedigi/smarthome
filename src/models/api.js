import axios from 'axios'

const REACT_APP_API_URL = "http://127.0.0.1:5000/api"
export default class HomeModel {
    static fetchHome() {
        let request = axios.get(`${REACT_APP_API_URL}/home`)
        return request
    }
    static addLight(){
        let request = axios.post(`${REACT_APP_API_URL}/home`)
        return request
    }

    static deleteLastLigth() {
        let request = axios.delete(`${REACT_APP_API_URL}/home/lights`)
        return request
    }

    static removeLight(data) {
        let request = axios.delete(`${REACT_APP_API_URL}/home/lights/${data}`)
        return request
    }

    static toggleLight(data) {
        let request = axios.put(`${REACT_APP_API_URL}/home/lights/toggle/${data}`)
        return request
    }
    static setTempature(data) {
        let request = axios.put(`${REACT_APP_API_URL}/home/tempature`,data)
        return request
    }
}
