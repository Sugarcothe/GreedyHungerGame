import React from 'react'
import ImageAvi from '../Image/aviavi.png'



const CenterRender = () => {
  return (
    <div className="center">
      <div>
        <img className="imageAvi" src={ImageAvi} alt="avatar"/>
      </div>

      <div className="header">
        <h1 >Game Over!</h1>
      </div>

      <div className="paragraph">
        <p>Total Food: <span className="bold">7/10</span></p>
        <p>Time Spent: <span className="bold">98 seconds</span></p>
      </div>

      <div className="select">
        <div>
          <h3 className="selectHeader">Game grid</h3>
        </div>
        <div className="selectdiv">
          <select>
            <option className="noselect" value="0">10 </option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
      </div>

      <div>
        <button className="button">Start game</button>
      </div>

     
    </div>
  )
}

export default CenterRender
