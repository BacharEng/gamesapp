import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "742932230f1a49c187213b41fbfd5e4d",

    }
})