import React from 'react'

const Card = ({data}) => {
  return (
    <div className="cardContainer">
      <p>
        {
          data.question
        }
      </p>
    </div>
  )
}

export default Card