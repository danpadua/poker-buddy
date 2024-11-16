import React, { useEffect, useState } from "react";
import { positionRanges } from "../rangePositions";

interface HandSelectorProps {
  selectedHand: string | null;
  setSelectedHand: React.Dispatch<React.SetStateAction<string | null>>;
  selectedPosition: string | null;
}

const hands = [
  "AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s",
  "AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s",
  "AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s",
  "AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s",
  "ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "T7s", "T6s", "T5s", "T4s", "T3s", "T2s",
  "A9o", "K9o", "Q9o", "J9o", "T9o", "99", "98s", "97s", "96s", "95s", "94s", "93s", "92s",
  "A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "88", "87s", "86s", "85s", "84s", "83s", "82s",
  "A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "77", "76s", "75s", "74s", "73s", "72s",
  "A6o", "K6o", "Q6o", "J6o", "T6o", "96o", "86o", "76o", "66", "65s", "64s", "63s", "62s",
  "A5o", "K5o", "Q5o", "J5o", "T5o", "95o", "85o", "75o", "65o", "55", "54s", "53s", "52s",
  "A4o", "K4o", "Q4o", "J4o", "T4o", "94o", "84o", "74o", "64o", "54o", "44", "43s", "42s",
  "A3o", "K3o", "Q3o", "J3o", "T3o", "93o", "83o", "73o", "63o", "53o", "43o", "33", "32s",
  "A2o", "K2o", "Q2o", "J2o", "T2o", "92o", "82o", "72o", "62o", "52o", "42o", "32o", "22"
];

const HandSelector: React.FC<HandSelectorProps> = ({ selectedHand, setSelectedHand, selectedPosition }) => {
  const [ranges, setRanges] = useState<string[]>([])
  const isPair = (hand: string) => {
    return hand[0] === hand[1];
  };

  useEffect(() => {
    if (selectedPosition !== null) {
      setRanges(positionRanges[selectedPosition])
    }
  }, [selectedPosition])

  useEffect(() => {
    console.log("ranges", ranges)

  }, [ranges])

  return (
    <div>
      <label>Select a hand: </label>
      <div style={styles.grid}>
        {hands.map((hand: string) => (
          <button
            key={hand}
            style={{
              ...styles.handButton,
              color: isPair(hand) || ranges.includes(hand) ? 'white' : (selectedHand === hand ? 'white' : 'black'),
              textAlign: 'center',
              backgroundColor:
                selectedHand === hand ? 'blue' :
                  ranges.includes(hand) ? "#00b306" :
                    isPair(hand) ? 'gray' : '#f1f1f1',
              boxShadow: isPair(hand) ? '0 4px 8px rgba(73, 73, 73, 0.551)' : 'none',
            }}
            onClick={() => setSelectedHand(hand)}
          >
            {hand}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(13, 1fr)',
    gap: '10px',
    marginTop: '10px'
  },
  handButton: {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default HandSelector;