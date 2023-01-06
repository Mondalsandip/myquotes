import React from 'react'
import classes from './HighlitedQuotes.module.css'

const HighlitedQuotes = (props) => {
  return (
    <figure className={classes.quote}>
        <p>{props.text} </p>
        <figcaption>{props.author}</figcaption>



      
    </figure>
  )
}

export default HighlitedQuotes
