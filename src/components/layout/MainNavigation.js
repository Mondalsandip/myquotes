import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import classes from './MainNavigation.module.css'


const MainNavigation = () => {
  const match= useRouteMatch()

  return (
    
        <header className={classes.header}>
          <ul>
            <li>
            <NavLink activeClassName={classes.active}  to={match.path}><h2 className={classes.logo}>    Great Quotes</h2></NavLink>

            </li>
          </ul>
            
            <nav className={classes.nav}>


           
            <ul>
                <li> <NavLink to='/quotes' activeClassName={classes.active} >All Quotes</NavLink>    </li>
                <li>  <NavLink to='/new-quote' activeClassName={classes.active} >New Quote</NavLink>  </li>
            </ul>
            </nav>
        </header>
      
  )
}

export default MainNavigation
