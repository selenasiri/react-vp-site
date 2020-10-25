import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <h1>Thank you for visiting our page!</h1>
      <p>Click here to learn more</p>
      
      <Link to="/about" className="btn btn-primary">About Us</Link> <br />
      <Link to="/great-divas" className="btn btn-primary">The Great Divas</Link><br />
      <Link to="/repertoire" className="btn btn-primary">Repertoire</Link> <br />
      <Link to="/vocal-health" className="btn btn-primary">Vocal Health</Link><br />
      <Link to="/resources" className="btn btn-primary">Resources</Link><br />
      <Link to="/feedback" className="btn btn-primary">Feedback</Link><br />
      <Link to="/contact" className="btn btn-primary">Contact</Link><br />
    </div>
  )
}

export default Landing
