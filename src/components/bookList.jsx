import { useEffect, useState } from "react";
import {  useNavigate,useLocation } from "react-router-dom";
import '../styles/bookList.css'


const BookList = () => {
    let[book,setBook]=useState([])
    useEffect(()=>{
        let fetchData= async()=>{
            let response=await fetch(' http://localhost:5000/books')
            let data=await response.json()
            setBook(data)   
        }
        fetchData()
    },[book])

    let handleDelete=(id,title)=>{
        fetch(`http://localhost:5000/books/${id}` ,{
        method:'delete'
        }); 
    alert(`${title} will be deleted permanently`)
 }

 let navigate=useNavigate()
 
 //to fetch the route value
 let location=useLocation()
 
 let read=(id)=>{
    if(location.pathname=='/admin/book-list'){
        navigate(`/admin/book-list/${id}`) 
    } else{
        navigate(`/user/book-list/${id}`)
    }
 }
    return ( 
        <div className="bookList">
            <h1>Books List({book.length})</h1>
           
            <div className="books_section">
                {book.map(data=>(
                    <div className="books-card">
                        <div className="bookimg">
                        <img width="280px" height="380px" src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="bookcontainer">
                        <h2>{data.title}</h2>
                        
                        <p>by <i><b style={{color:"#007185"}}>{data.authors}</b></i><br />Categories: {data.categories}</p>
                         <i>PageCount: <b>{data.pageCount}</b></i><br /> <br />
                         <button className="btn-readmore" onClick={()=>read(data.id)}>Read More</button>
                        {location.pathname=='/admin/book-list' && <button className="btn-delete" onClick={()=>handleDelete(data.id,data.title)}>Delete</button> }
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
     );
}
 
export default BookList;