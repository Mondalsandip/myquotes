import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../Hooks/use-http'
import { addQuote } from '../Libs/api'

const NewQuote = () => {
  const history= useHistory()
  const {sendRequest, status}= useHttp(addQuote)

  useEffect(()=>{
    if(status === 'SUCCESS'){
      history.push('/quotes')
    }

  },[status,history])

  const handleInputData=(data)=>{
    console.log(data)
    sendRequest(data)

    history.push('/quotes')


  }

  return (
    <QuoteForm isLoading={status === 'pending' } onAddSubmit={handleInputData}/>
  )
}

export default NewQuote
