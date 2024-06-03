import React from 'react'
import { useDispatch } from 'react-redux'
import { incCounter } from '../../lib/action/action'


const Footer = () => {
   const  dispatch = useDispatch()
  return (
    <div>
        <h2>Footer</h2>
        <button onClick={()=> dispatch(incCounter())}>Increment</button>
    </div>
  )
}

export default Footer