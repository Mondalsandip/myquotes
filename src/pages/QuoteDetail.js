import React from 'react'
import { useParams,Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlitedQuotes from '../components/quotes/HighlitedQuotes'

const DUMMY_DATA=[
  {id:'q1', author:'Max', text:'Learning React is fun!'},
  {id:'q2', author:'Maxmania', text:'Learning React is great'},
  {id:'q3', author:'Sandip', text:'Master of  React'},
  {id:'q4', author:'Mondal', text:'Expert of  React'},

]

const QuoteDetail = () => {
    const param= useParams()
    const quote= DUMMY_DATA.find(item => item.id === param.quoteId) 
  if(!quote){
    <p>No Quote Found!</p>
  }    

  return (
    <div>
      <HighlitedQuotes  text={quote.text}   author={quote.author}   />
      

      <Route  path={`/quotes/:${param.quoteId}/comments`} >
        <Comments/>

      </Route>
    </div>
  )
}

export default QuoteDetail
