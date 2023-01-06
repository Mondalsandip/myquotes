import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA=[
  {id:'q1', author:'Max', text:'Learning React is fun!'},
  {id:'q2', author:'Maxmania', text:'Learning React is great'},
  {id:'q3', author:'Sandip', text:'Master of  React'},
  {id:'q4', author:'Mondal', text:'Expert of  React'},

]

const AllQuotes = () => {
  return (
    <QuoteList  quotes={DUMMY_DATA} />
  )
}

export default AllQuotes
