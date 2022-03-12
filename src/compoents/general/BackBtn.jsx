import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function BackBtn() {
    return (
        <Link to={"/"} className="btn-link">
          <FaArrowLeft color="black" className='arrow-icon' /> Back
        </Link>
    )
}

export default BackBtn