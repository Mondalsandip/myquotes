import React from 'react'
import classes from './QuoteForm.module.css'
import Card from '../UI/Card'

const QuoteForm = () => {
  return (
    <Card>
        <form>
            <div className={classes.control}>
                <label htmlFor="text">Author</label>
                <input type="text" name="" id="text" />
            </div>
            <div className={classes.control}> 
                <label htmlFor="area">Text</label>
                <textarea name="area" id="area" cols="30" rows="10"></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'> Add Quotes   </button>
            </div>
        </form>
    </Card>
  )
}

export default QuoteForm
