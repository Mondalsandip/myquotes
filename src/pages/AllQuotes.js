import React, { useEffect } from 'react'
import QuoteList from '../components/quotes/QuoteList'
import useHttp from '../Hooks/use-http'
import { getAllQuotes } from '../Libs/api'
import LoadSpinner from '../components/UI/LoadSpinner'
import NotFound from './NotFound'


const AllQuotes = () => {
  const {sendRequest,data,status,error }= useHttp(getAllQuotes, true)
  useEffect(()=>{
    sendRequest()
  },[sendRequest])

  if(status === 'pending'){
    return <div className='centered'> <LoadSpinner/>  </div>
  }

  if(status === 'error'){
    return <p className='centered focused'>{error}</p>
  }
  if(status === 'completed'  && (!data ||   data.length === 0)){
    return <NotFound/>
  }
  return (
    <QuoteList  quotes={data} />
  )
}

export default AllQuotes
