import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

export const Error404 = () => {
  return (
    <div className='container'>
        <div className="Erro404">
                <img src="./images/404Error.png" alt=""/>
        </div>
        <Link to="/">
          <button className="goBack">Go to Homepage</button>
        </Link>
    </div>
  )
}
