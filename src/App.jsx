import React, { useReducer } from 'react';
import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList'

import './style/App.scss'

const reducer = (state, action) => {
  switch(action.type){
    case'uno':
      return{content: action.payload}
    case'search':
      return{search:action.payload.search,content: action.payload.result}
    default:
      return{content: 'generic'}
  }
}

const App = () => {

  const [state,dispatch] = useReducer(reducer, {search: '',content: []})

  return (
    <div className="container">
      <SearchBar udpateSearch={dispatch}/>
      <h3>{ state.search!=='' ? `Displaying results for: ${state.search}` : ''}</h3>
      <BookList list={state.content||[]}/>
    </div>
  );
}
 
export default App;