import React, { useState } from 'react';
import './AddBooks.css';
import axios from 'axios';
import { url } from '../../resoucres/resource';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddBooks({getBooks}) {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [pages, setPages] = useState('');
  const [summary, setSummary] = useState('');

  const addABook = (event)=> {
    event.preventDefault();

    let formJSON = {
      title : title,
      author : author,
      language : language,
      pages : pages,
      summary : summary
    }

    axios.post(url, formJSON).then((data)=>{
      setTitle('');
      setAuthor('');
      setLanguage('');
      setPages('');
      setSummary('');

      if(data.status === 201){
        toast("Book Added Successfully!"); 
        getBooks();
      }
    });
  }



  return (
    <div className = 'addBooks'>
      <h2>Add Books</h2>
      <form name='form' >
        <lable className = 'addBookName'>Title:</lable>
        <input className = 'addBookInput' 
        type = 'text' value = {title} onChange={(e) => setTitle(e.target.value)}/>
        <lable className = 'authorName'>Author:</lable>
        <input className = 'addBookInput' 
        type = 'text'value = {author} onChange={(e) => setAuthor(e.target.value)}/>
        <lable className = 'language'>Language:</lable>
        <input className = 'addBookInput' 
        type = 'text'value = {language} onChange={(e) => setLanguage(e.target.value)}/>
        <lable className = 'pages'>Pages:</lable>
        <input className = 'addBookInput' 
        type = 'text' value = {pages} onChange={(e) => setPages(e.target.value)}/>
        <lable className = 'summary'>Summary:</lable>
        <input className = 'addBookInput ' 
        type = 'text'value = {summary} onChange={(e) => setSummary(e.target.value)}/>

        <button type = 'submit' className = 'addBooks_button' onClick = {addABook}>add a book</button>

        
        <ToastContainer/>
      </form>
    </div>
  )
}

export default AddBooks
