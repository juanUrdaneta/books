import React from 'react';
import Card from './Card'

const BookList = ({list}) => {
  return ( 
    <div className="book-list">
      {list.length===0 && (
        <h2>Nothing to display</h2>
      )}
      {
        list.map(e=>(
          <Card info={e.volumeInfo} />
        ))
      }
    </div>
   );
}
 
export default BookList;