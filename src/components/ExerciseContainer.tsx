"use client";

import React from "react";
import { useState } from "react";
import Exercise from "./Exercise";

const ExerciseContainer = () => {
  const [maxResult, setMaxResult] = useState(100);
  const [numOperands, setNumOperands] = useState(3);
  const [regenerate, setRegenerate] = useState<number>(0);
  return (
    <div style={{ padding: "20px" }}>
      Max result of addition:{" "}
      <input
        type="number"
        placeholder="Max addition number"
        value={maxResult}
        onChange={(e) => setMaxResult(parseInt(e.target.value))}
      />
      <br />
      Number of operands:{" "}
      <input
        type="number"
        placeholder="Max addition number"
        defaultValue={numOperands}
        onChange={(e) => setNumOperands(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setRegenerate(regenerate + 1)}>Regenerate</button>
      <br />
      <Exercise
        maxResult={maxResult}
        operands={numOperands}
        regenerate={regenerate}
      />
    </div>
  );
};

export default ExerciseContainer;
