"use client";

import React from "react";
import { useState } from "react";
import Exercise from "./Exercise";

const ExerciseContainer = () => {
  const [maxResult, setMaxResult] = useState(100);
  const [numOperands, setNumOperands] = useState(3);
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
      <br />
      <Exercise maxResult={maxResult} operands={numOperands} />
    </div>
  );
};

export default ExerciseContainer;
