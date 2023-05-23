import React, { useEffect } from 'react'
import { useParams,Route, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlitedQuotes from '../components/quotes/HighlitedQuotes'
import { Link, useLocation, } from 'react-router-dom'
import {getSingleQuote} from '../Libs/api'
import useHttp from '../Hooks/use-http'
import LoadSpinner from '../components/UI/LoadSpinner'

const DUMMY_DATA=[
  {id:'q1', author:'Max', text:'Learning React is fun!'},
  {id:'q2', author:'Maxmania', text:'Learning React is great'},
  {id:'q3', author:'Sandip', text:'Master of  React'},
  {id:'q4', author:'Mondal', text:'Expert of  React'},

]

const QuoteDetail = () => {
    const param= useParams()
    const location= useLocation()
    const match =useRouteMatch()
    const {quoteId}= param

    const {sendRequest, status, data, error  }= useHttp(getSingleQuote,true)
  useEffect(()=>{
    sendRequest(quoteId)
  },[sendRequest,quoteId])

  if(status === 'pending'){
    return <div className='centered'> <LoadSpinner/>  </div>
  }

  if(status === 'error'){
    return <p className='centered focused'>{error}</p>
  }


  if(!data){
    <p>No Quote Found!</p>
  }    


  return (
    <div>
      <HighlitedQuotes  text={data.text}   author={data.author}   />
      <Route path={match.path} exact >

      <div className='centered'>  
    <Link className='btn--flat' to={`${location.pathname}/comments`}> Load Comment  </Link>
    </div>


      </Route>

    

      

      <Route  path={`${match.path}/comments`} >
        <Comments/>

      </Route>
    </div>
  )
}

export default QuoteDetail
