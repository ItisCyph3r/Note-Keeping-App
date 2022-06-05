import React from 'react';
import cars from './cars';

export default function Destructuring(props) {

  const [Honda, Tesla] = cars

  const {model} = Honda;

  const {speedStats: {topSpeed: hondaTopSpeed}} = Honda;
  const {speedStats: {topSpeed: teslaTopSpeed}} = Tesla;

  const {coloursByPopularity: hondaColor} = Honda;
  const {coloursByPopularity: teslaColor} = Tesla;

  return (
    <div>
      <h2>Destructuring</h2>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaColor[0]}</td>
        </tr>
        <tr>
          <td>{Tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaColor[0]}</td>
        </tr>
      </table>
    </div>
  )
}
