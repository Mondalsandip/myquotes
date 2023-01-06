import React from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const history= useHistory()

  const handleInputData=(data)=>{
    console.log(data)

    history.push('/quotes')


  }

  return (
    <QuoteForm onAddSubmit={handleInputData}/>
  )
}

export default NewQuote
