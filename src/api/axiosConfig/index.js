import axios from "axios";
const instance = axios.create();

instance.interceptors.request.use(config => {
    config.headers.Accept = "application/json"
    config.params = {apiKey:process.env.NEXT_PUBLIC_API_KEY_EVERYTHING}
    return config
});

export default instance;