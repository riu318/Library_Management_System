import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addBook.css'
const AddBook = () => {
    let[title,setTitle]=useState("")
    let[authors,setAuthors]=useState("")
    let[categories,setCategories]=useState("")
    let[pageCount,setPageCount]=useState("")
    let[shortDescription,setShortDescription]=useState("")
    let[longDescription,setLongDescription]=useState("")
    let[thumbnailUrl,setThumbnailUrl]=useState("")
    let navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault(); //prevent reloading of the page
        //data need to be posted
        let bookData={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
        //data to post on server
        fetch("http://localhost:5000/books",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added')
        navigate('/admin/book-list')
    }
    return ( 
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="formdiv">
                <form action="" className="formaddbook" onSubmit={handleSubmit}>
                    <div className="title">
                    <label >Title</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="Title of the book " required />
                    </div>

                    <div className="authors" >
                    <label >Authors</label>
                        <input type="text"  value={authors} onChange={(e)=>setAuthors(e.target.value)}  placeholder="Authors of the book" required  />
                    </div>

                    <div className="categories" >
                    <label >Categories</label>
                        <input type="text"  value={categories} onChange={(e)=>setCategories(e.target.value)}  placeholder="categories of the book" required />
                    </div>

                    <div className="pageCout">
                    <label >Pageout</label>
                        <input type="number"  value={pageCount} onChange={(e)=>setPageCount(e.target.value)}  placeholder="PageCount of the book" required  />
                    </div>

                    <div className="thumbnailUrl">
                    <label >URL of Book</label>
                        <input value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)}  type="text" placeholder="URL of the book" required  />
                    </div>

                    <div className="shortDescription">
                    <label >shortDescription</label>
                        <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)}  placeholder="Short Describtion of the book" required name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="longDescription">
                    <label >longDescription</label>
                        <textarea value={longDescription} onChange={(e)=>setLongDescription(e.target.value)}  placeholder="Long Description of the book" required name="" id="" cols="30" rows="10"></textarea>
                    </div>
                   
                    

                    <button className="addbookbtn">Add Book</button>
                    
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;