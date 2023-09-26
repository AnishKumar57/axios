import React,{useState} from 'react';
import './Card.css';
import axios from 'axios';
import { url } from '../../resoucres/resource';


function Card({id,title, author,language, pages,summary, getBooks}) {

  const [value, setValue] = useState({
    id: id,
    title: title,
    author: author,
    language: language,
    pages: pages,
    summary: summary 
  });

  const deleteBook = () =>{
    axios.delete(`${url}/${id}`).then(data=> console.log(data));
    getBooks(); 
  }

  
  const updateBook =() =>{
    
    axios.get(`${url}/${id}`).then((res) =>{
      setValue({
          ...value, 
          title: res.data.title,
          author: res.data.author,
          language: res.data.language,
          pages: res.data.pages,
          summary: res.data.summary 

         } )
      
    } );


  }


  return (
    <div className = 'cards'>
      <div className = 'cardTitle'>Title: {title}</div>
      <div className= 'cardDiscpription'>
        <p>Author: {author}</p>
        <p>Language: {language}</p>
        <p>Pages: {pages}</p>
      </div>
      <div className= 'cardSummary'>{summary}</div>
      
      <div className = 'cardButton'>
        <button  onClick= {updateBook} className = 'button'>Edit</button>
        <button   onClick= {deleteBook} className = 'button'>Delete</button>
      </div>

    </div>

  )
}

export default Card
