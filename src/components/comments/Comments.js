import React, { useState } from 'react'
import NewCommentForm from './NewCommentForm'
import classes from './Comments.module.css'

const Comments = () => {
  const [isAddingComment, setIsAddingComment]=  useState(false)


  const handleButton=()=>{
    setIsAddingComment(true)
  }


  return (
    <section className={classes.comments}>
      <h2>User comments</h2>

      {!isAddingComment  &&       <button className='btn' onClick={handleButton}> Add a Comment</button>     }
      {isAddingComment && <NewCommentForm/> }
      <p>comments...</p>

    </section>
  )
}

export default Comments
