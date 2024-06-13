import React from 'react';
import './headerNumber.css';


function HeaderNumber(params) {
  return (
    <div className="container graph">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="box text-center">
            <div className="number">2M+</div>
            <span className="details">users till date</span>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="box text-center">
            <div className="number">75%</div>
            <span className="details">course completion rate</span>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="box text-center">
            <div className="number">60%</div>
            <span className="details">reduction in onboarding cost</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderNumber;