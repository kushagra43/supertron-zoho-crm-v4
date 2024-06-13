import React from "react";
import './SkillingDetails.css';
import genAIIcon from "./../../assets/ai-techology.svg";
import multilingualIcon from "./../../assets/language-translation.svg";
import engagementSuitIcon from "./../../assets/eng-suite.svg";
import gamifiedIcon from "./../../assets/genAI-problem-solving.svg";

function SkillingDetails(params) {
  return (
    <div className="features">
      <div className="row justify-content-center">
        <div className="col-md-6 px-0 px-md-3">
          <div className="box text-center">
            <img src={genAIIcon} alt="1" className="img-fluid" />
            <div className="number">Gen AI Powered</div>
            <span className="details">Explore our Gen AI suite to create content in multiple languages with seamlessly</span>
          </div>
        </div>
        <div className="col-md-6 px-0 px-md-3">
          <div className="box text-center">
            <img src={multilingualIcon} alt="2" className="img-fluid" />
            <div className="number">Multilingual support</div>
            <span className="details">Train your global workforce in 15+ languages and more on demand</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 px-0 px-md-3">
          <div className="box text-center">
            <img src={engagementSuitIcon} alt="1" className="img-fluid" />
            <div className="number">Engagement suite</div>
            <span className="details">Take a step beyond learning and engage with your learners using Feeds, notifications and our communication suite</span>
          </div>
        </div>
        <div className="col-md-6 px-0 px-md-3">
          <div className="box text-center">
            <img src={gamifiedIcon} alt="2" className="img-fluid" />
            <div className="number">Gamified Learning</div>
            <span className="details">Explore our gamified learning pathways, leaderboard, coins and badges framework to make learning fun</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillingDetails;