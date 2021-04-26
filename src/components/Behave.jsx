import React from "react";
import Advocate from "../assets/advocate.png"
import Venturer from "../assets/venturer.png"


const Behave = () => {
  return (
        <div className=" behave justify-content-center container-fluid">
          <div className="ml-5">
            <a target="_blank" rel="noreferrer" href="https://www.predictiveindex.com/reference-profile/venturer/"><img src={ Venturer } alt="Venturer"/><p className='ml-3'>Venturer The Predictive Index</p></a>
            
            
          </div>
          <div className="mt-5 ml-3">
            <a target="_blank" rel="noreferrer" href="https://www.16personalities.com/infj-personality"><img src={ Advocate } alt="advocate"/><p className='ml-3'>INFJ-Advocate Meyer Brigs</p></a>
            
            
          </div>
        </div>
  )
}


export default Behave;