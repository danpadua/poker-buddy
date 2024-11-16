import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import HandSelector from './components/HandSelector';
import PositionSelector from './components/PositionSelector';
import ProbabilityDisplay from './components/ProbabilityDisplay';

const App: React.FC = () => {
  const [selectedHand, setSelectedHand] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Poker Buddy 🎲
      </Typography>

      <div style={{ marginTop: 50 }}>
        <PositionSelector selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />
      </div>

      <div style={{ marginTop: 50 }}>
        <HandSelector selectedHand={selectedHand} setSelectedHand={setSelectedHand} selectedPosition={selectedPosition} />
      </div>

      {selectedHand && selectedPosition && (
        <div style={{ marginTop: 50 }}>
          <ProbabilityDisplay hand={selectedHand} position={selectedPosition} />
        </div>
      )}
    </Container>
  );
};

export default App;
