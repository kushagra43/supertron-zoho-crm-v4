import React from "react";
import './SuccessModal.css';
import tickIcon from './../../assets/purple-tick.svg'
import webLogo from './../../assets/websiteLink.svg'
import playStoreLogo from './../../assets/playStoreLink.svg'
import iosLogo from './../../assets/appleStoreLink.svg'

import { playStoreLink, appStoreLink, webAppLink } from '../../constant';

function SuccessModal(params) {
  return (
    <div className="">
      <div className="col-md-12 text-center mt-3">
        <h2 className="text-center sighupHeading">Signup complete!</h2>
        <img src={tickIcon} alt="1" className="img-fluid" />
        <p className="platformText">Access our platform via:</p>
        <div className="container"></div>
        <div className="d-flex flex-column">
          <a href={webAppLink} rel='noreferrer' className="mb-4 redirectionLink" target='_blank'>
            <img className='logoImage' src={webLogo} alt='Web logo' />
          </a>
          <a href={playStoreLink} rel='noreferrer' className="mb-4 redirectionLink" target='_blank'>
            <img className='logoImage' src={playStoreLogo} alt='Play store logo' />
          </a>
          <a href={appStoreLink} rel='noreferrer' className="mb-4 redirectionLink" target='_blank'>
            <img className='logoImage' src={iosLogo} alt='IOS logo' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal;