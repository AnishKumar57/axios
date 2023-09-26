import React from 'react';
import './List.css';
import Card from '../card/Card';


function List({ books, getBooks = {getBooks}}) {
    
  return ( 

    <div className='list'>
        {books.data?.map((books, index)=>{
            const {id, author,country, language, pages ,title, year, summary} = books;
            return (
            <Card 
                id={ id }
                author = { author }
                country = { country }
                language = { language }
                pages = { pages }
                title = { title }
                year = { year }
                summary = {summary}
                getBooks={getBooks}
                
                />
                )
            })
            }

      
    </div>
  )
}

export default List

