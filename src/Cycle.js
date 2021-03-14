import React from 'react'
import Arrow from 'react-arrow'
import './Cycle.css'

const headWidth = 30
const headLength = 10
const strokeWidth = .5
const shaftWidth = 10
const fill = "#e6c79c"
const stroke = "#78586f"

function Cycle() {
    return (
      <div className="cycle-page">
        <h1>The Redux Cycle</h1>
        <div className="cycle-container">
          <div className="box view">VIEW</div>
          <div className="box actions">ACTIONS</div>
          <div className="box store">STORE</div>
          <div className="box reducer">ROOT REDUCER</div>
          <div className="box state">STATE</div>
          <div className="box dispatcher">DISPATCHER</div>
          <div className="box middleware">MIDDLEWARE</div>
          <div className="box api">API</div>
          <Arrow
            className="arrow view-action-arrow-two"
            direction="up"
            shaftWidth={shaftWidth}
            shaftLength={50}
            headWidth={headWidth}
            headLength={headLength}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <Arrow
            className="arrow action-dispatcher-arrow-one"
            direction="up"
            shaftWidth={shaftWidth}
            shaftLength={300}
            headWidth={headWidth}
            headLength={headLength}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <Arrow
            className="arrow action-dispatcher-arrow-two"
            direction="right"
            shaftWidth={shaftWidth}
            shaftLength={220}
            headWidth={headWidth}
            headLength={headLength}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <Arrow
            className="arrow middleware-api-arrow-one"
            direction="right"
            shaftWidth={shaftWidth}
            shaftLength={60}
            headWidth={headWidth}
            headLength={headLength}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <Arrow
            className="arrow middleware-api-arrow-two"
            direction="left"
            shaftWidth={shaftWidth}
            shaftLength={60}
            headWidth={headWidth}
            headLength={headLength}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <Arrow
            className="arrow dispatcher-store-arrow"
            direction="down"
            shaftWidth={shaftWidth}
            shaftLength={60}
            headWidth={headWidth}
            headLength={headLength}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <div className="box single-reducer-one">reducer</div>
          <div className="box single-reducer-two">reducer</div>
          <div className="box single-reducer-three">reducer</div>
          <Arrow
            className="arrow reducer-state-arrow"
            direction="down"
            shaftWidth={shaftWidth}
            shaftLength={50}
            headWidth={headWidth}
            headLength={headLength}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <Arrow
            className="arrow state-action-arrow"
            direction="left"
            shaftWidth={shaftWidth}
            shaftLength={140}
            headWidth={headWidth}
            headLength={headLength}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </div>
      </div>
    )
}

export default Cycle