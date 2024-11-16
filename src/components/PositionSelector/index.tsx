import React, { useEffect, useState } from 'react';

interface PositionSelectorProps {
  selectedPosition: string | null;
  setSelectedPosition: React.Dispatch<React.SetStateAction<string | null>>;
}

const positions = [
  "UTG", "UTG1", "UTG2", "LoJack", "HiJack", "Cutoff", "BTN", "SB", "BB"
];

const PositionSelector: React.FC<PositionSelectorProps> = ({ selectedPosition, setSelectedPosition }) => {
  const [position, setPosition] = useState(selectedPosition);

  const handlePositionChange = (newPosition: string) => {
    setPosition(newPosition);
  };

  useEffect(() => {
    setSelectedPosition(position)
  }, [position, setSelectedPosition])

  return (
    <div>
      <label>Select position: </label>
      {positions.map((position) => (
        <button
          key={position}
          style={{
            ...styles.handButton,
            marginRight: 10,
            color: selectedPosition === position ? 'white' : 'black',
            textAlign: 'center',
            backgroundColor: selectedPosition === position ? '#4CAF50' : '#f1f1f1'
          }}
          onClick={() => handlePositionChange(position)}>
          {position}
        </button>
      ))
      }
    </div >
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

export default PositionSelector;