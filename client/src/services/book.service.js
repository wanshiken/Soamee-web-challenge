import axios from 'axios';

class BookService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/books`,
            withCredentials: true
        })
    }

    getBooks = () => this.instance.get("/");
    getOneBook = (id) => this.instance.get(`/${id}`);
    editBook = (id, updatedData) => this.instance.put(`/${id}/edit`, updatedData);
    createBook = (book) => this.instance.post("/create", book);
}

export default BookService;