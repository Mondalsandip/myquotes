import React, { useRef } from 'react'
import classes from './NewCommentForm.module.css'

const NewCommentForm = () => {
  const ref=  useRef()




    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(ref.current.value)  // post this to server

    }

  return (
    <div>
        <form onSubmit={handleSubmit} className={classes.form}>
            <label htmlFor="text">Your Comment</label>
            <textarea id="text" cols="15" rows="8" ref={ref}></textarea>
            <button className='btn'>Add Comment</button>



        </form>
      
    </div>
  )
}

export default NewCommentForm
