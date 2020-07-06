import axios from 'axios';

const instance = axios.create({
    baseUrl:"http://localhost:44393",
    headers:{
        headerType: "example header type"
    }
});

export default instance;