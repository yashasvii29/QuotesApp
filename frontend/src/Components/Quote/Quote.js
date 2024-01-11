import React from 'react'

const Quote = (props) => {
  return (
    <div>
        <li>
            <span>
                <p>{props.text}</p>
                <h3>{props.author}</h3>
            </span>
            <button>View full Quote</button>
        </li>
    </div>
  )
}

export default Quote