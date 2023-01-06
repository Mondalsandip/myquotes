import React, { useState } from 'react'
import classes from './QuoteForm.module.css'
import Card from '../UI/Card'
import { useRef } from 'react'
import LoadSpinner from '../UI/LoadSpinner'
import { Prompt } from 'react-router-dom'

const QuoteForm = (props) => {
    const text=useRef()
    const area=useRef()
    const [isEntering, setIsEntering]= useState(false)
    
     const submitFormHandler=(e)=>{
        e.preventDefault()
        props.onAddSubmit({ text: text.current.value, area:area.current.value })
        
    }
    const handleFocus=()=>{
        console.log('focused')
        setIsEntering(true)

    }

  return (
    <> 
    <Prompt when={isEntering} message={(location)=> 'Are you sure want to leave? All data will be lost.'}/>
    <Card>
        <form onFocus={handleFocus} onSubmit={submitFormHandler}>
           
            <div className={classes.control}>
                <label htmlFor="text">Author</label>
                <input type="text" name="" id="text" ref={text} />
            </div>
            <div className={classes.control}> 
                <label htmlFor="area">Text</label>
                <textarea name="area" id="area" cols="30" rows="10" ref={area}></textarea>
            </div>
            <div className={classes.actions}>
                <button onClick={()=> setIsEntering(false)}  className='btn'> Add Quotes   </button>
            </div>
        </form>
    </Card>
    </>
  )
}

export default QuoteForm
