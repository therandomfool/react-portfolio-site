import React from "react";
import Advocate from "../assets/advocate.png"
import Venturer from "../assets/venturer.png"


const Behave = () => {
  return (
        <div className=" behave  container-fluid">
          <div className="bRow1 ml-5 col-6">
            <a target="_blank" rel="noreferrer" href="https://www.predictiveindex.com/reference-profile/venturer/"><img src={ Venturer } alt="Venturer"/><p className='ml-3'>Venturer The Predictive Index</p></a>
            
            
          </div>
          <div className="bRow2 ml-5 col-6">
            <a target="_blank" rel="noreferrer" href="https://www.16personalities.com/infj-personality"><img src={ Advocate } alt="advocate"/><p className='ml-3'>INFJ-Advocate Meyer Brigs</p></a>
            
            
          </div>
        </div>
  )
}


export default Behave;