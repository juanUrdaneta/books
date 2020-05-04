import React from 'react';
import Card from './Card'

const BookList = ({list}) => {
  return ( 
    <div className="book-list">
      {
        list.map(e=>(
          <Card info={e.volumeInfo} />
        ))
      }
    </div>
   );
}
 
export default BookList;