import React from 'react'

function Spinner() {
    return (
        <div className="spinner-container">
            <svg className='spinner-svg' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" />
            </svg>
            {/* <button className="btn-spinner">
                <span className="spinner"></span>
                <span className="btn__text">loading...</span>
            </button> */}
        </div>
    )
}

export default Spinner