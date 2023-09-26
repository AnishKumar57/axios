import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import List from './components/List/List';
import AddBooks from './components/AddBooks/AddBooks';
import axios  from 'axios';
import {url} from './resoucres/resource';


function App() { 

  const [books, setBooks] = useState([]);

  useEffect(() =>{
    getBooks();
  },[]); 

  const getBooks = async ()=> {
    const data = await axios.get(url);
    setBooks(data); 
 }
 
  return (
    <div>

      <Navbar/>

      <div className='appBody'>
        <List getBooks = {getBooks} books={books}/>
        <AddBooks getBooks = {getBooks}/>
      </div>
      

    </div>
  )
};
export default App
