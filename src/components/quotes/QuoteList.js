import React from 'react'
import { useLocation } from 'react-router-dom'
import QuoteItems from './QuoteItems'
import classes from './QuoteList.module.css'

const sortQuotes=(quotes,asc) =>{
  return quotes.sort((quoteA,quoteB)=>{
    if(asc){
      return quoteA.id > quoteB.id ? 1: -1;
    }else{
      return quoteA.id < quoteB.id ? 1:-1;
    }
  })
}


const QuoteList = (props) => {
  const location = useLocation()

  const param=new URLSearchParams(location.search)
  const isSortingAscending= param.get('sort') === 'asc'

  console.log(isSortingAscending)

  const sortedQuotes=sortQuotes(props.quotes,isSortingAscending )


  return (
    <ul className={classes.list}>

        {sortedQuotes.map( item => <QuoteItems key={item.id} id={item.id}  author={item.author} text={item.text} /> )}
      
    </ul>
  )
}

export default QuoteList
