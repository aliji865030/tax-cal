import React from 'react'
import "./GetStartedCard.scss"

const GetStartedCard = () => {
  return (
    <div className='get-started-card'>
        <div className="heading">
            <h2>
            Get Started with KoinX for FREE
            </h2>
        </div>
        <div className="para">
            <p>
            With our range of features that you can equip for free,
            KoinX allows you to be more educated and aware of your tax reports.
            </p>
        </div>
        <div className="image">
            <img src="get-started-logo.png" alt="" />
        </div>
        <div className="button">
            <button>
                <p>Get Started for Free</p>
                <i class="fa-solid fa-arrow-right"></i> 
            </button>
        </div>
      
    </div>
  )
}

export default GetStartedCard
