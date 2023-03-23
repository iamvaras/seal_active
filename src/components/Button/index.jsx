import React from 'react'
import './button.css'

const Button = ({url , text}) => {
  return (
    <a href={url}><button >{text}</button></a>
  )
}

export default Button