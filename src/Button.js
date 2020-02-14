import React from 'react'

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const Button = (props) => <button {...props}>{props.text}</button>

export default Button