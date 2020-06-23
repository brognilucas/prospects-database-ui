import axios from 'axios';


axios.defaults.withCredentials = true

export default axios.create({ 
    baseURL: process.env.SERVER_URL || 'http://localhost:8080'
})