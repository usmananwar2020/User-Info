import React from 'react'
import '../index.css'
import image from '../error-404.png'
function NotFound() {
    return (
        <div className="not-found"
        style={{ backgroundImage: `url(${image})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
        </div>
    )
}

export default NotFound
