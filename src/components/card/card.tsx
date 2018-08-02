import * as React from 'react'
import './card.scss'
const Card = (props) =>{
  return (
    <div className='card-body'> {props.children}</div>
  )
}
export default Card