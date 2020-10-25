import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <h1>Thank you for visiting our page!</h1>
      <p>Click here to learn more</p>
      
      <Link to="/about" className="btn btn-primary">About Us</Link>
    </div>
  )
}

export default Landing
