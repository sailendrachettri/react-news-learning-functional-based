import React from "react"
import loading from './spinner_book.gif'

const Spinner = () => {
    return (
        <>
            <div className="text-center">
                <img className='my-3' src={loading} alt="loading page" />
            </div>
        </>
    )
}

export default Spinner
