import React from 'react'
import QuoteItems from './QuoteItems'
import classes from './QuoteList.module.css'


const QuoteList = (props) => {

  return (
    <ul className={classes.list}>

        {props.quotes.map( item => <QuoteItems key={item.id} id={item.id}  author={item.author} text={item.text} /> )}
      
    </ul>
  )
}

export default QuoteList
