import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../styles/readBook.css'
import { useNavigate,useLocation} from "react-router-dom"
const ReadBook = () => {

    let [book, setBook] = useState([])
    let params = useParams()
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(` http://localhost:5000/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    }, [book])

    let navigate = useNavigate()
    let location=useLocation()
    let handleBack = (id) => {
        if(location.pathname==`/admin/book-list/${id}`){
            navigate(`/admin/book-list`) 
        } else{
            navigate(`/user/book-list`)
        }
        // navigate('/admin/book-list')
    }
    return (
        <div className="readBook">

           <div className="container">
           <div className="bookimg">
                <img width="250px" height="350px" src={book.thumbnailUrl} alt="" />
            </div>
            <div className="bookcontainer">
                <h2>{book.title}</h2>
                <p>by <i><b style={{ color: "#007185" }}>{book.authors}</b></i><br />Status: {book.status} <br />Categories: {book.categories}</p>
                <i> <h6>{book.pageCount}</h6></i>
                <p>Description: {book.shortDescription}</p>
                <p>{book.longDescription}</p>
              
                <button className="btn-readmore" onClick={()=>handleBack(book.id)}>Back</button>
            </div>
           </div>
        </div>
    );
}

export default ReadBook;