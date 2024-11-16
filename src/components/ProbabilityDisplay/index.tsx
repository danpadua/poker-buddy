import React from 'react';
import { handsProbabilities } from '../handsProbabilities'
import { positionRanges } from '../rangePositions';

interface ProbabilityDisplayProps {
  hand: string;
  position: string;
}

const ProbabilityDisplay: React.FC<ProbabilityDisplayProps> = ({ hand, position }) => {
  const isHandInPosition = positionRanges[position]?.includes(hand);

  const probabilities = handsProbabilities[hand] || { fold: 0, checkCall: 0, raise: 0 };

  return (
    <div>
      {isHandInPosition ? (
        <div>
          <h2>Probabilidade para a mão {hand} em {position}</h2>
          <ul>
            <li>Fold: {probabilities.fold}%</li>
            <li>Check/Call: {probabilities.checkCall}%</li>
            <li>Raise: {probabilities.raise}%</li>
          </ul>
        </div>
      ) : (
        <p>A mão {hand} não está no range para a posição {position}</p>
      )}
    </div>
  );
}

export default ProbabilityDisplay;
