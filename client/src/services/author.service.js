import axios from 'axios';

class AuthorService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/authors`,
            withCredentials: true
        })
    }

    getAuthors = () => this.instance.get("/");
    getOneAuthor = (id) => this.instance.get(`/${id}`);
    editAuthor = (id, updatedData) => this.instance.put(`/${id}/edit`, updatedData);
    createAuthor = (authors) => this.instance.post("/", authors);
}

export default AuthorService;