import React from 'react'
import classes from './QuoteItems.module.css'
import QuoteDetail from '../../pages/QuoteDetail'
import { Link,Route } from 'react-router-dom'


const QuoteItems = (props) => {
  return (
    <li className={classes.item}>
        <figure>
            <blockquote>
            <p>{props.text}</p>
             </blockquote>
            <figcaption> {props.author} </figcaption>
        </figure>
        <Link className='btn' to={`quotes/${props.id}`}  >
            View Full Screen
        
        </Link>

    </li>
  )
}

export default QuoteItems
