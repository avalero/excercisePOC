"use server";

export const validate = async (
  operands: number[],
  givenResult: number
): Promise<{ correct: boolean; result: number }> => {
  const result = operands.reduce((a, b) => a + b, 0);
  const correct = result === givenResult;
  console.log("Validation run server side: ", operands, givenResult, correct);
  return { correct, result };
};

export const getOperands = async (
  numOperands: number,
  maxResult: number
): Promise<number[]> => {
  const operands = [];
  if (!maxResult || !numOperands) return [];
  // generate operands so that max result of addition is maxResult
  for (let i = 0; i < numOperands; i++) {
    // addition of previous operands
    const previous: number = operands.reduce((a, b) => a + b, 0);
    operands.push(
      Math.floor(
        Math.random() * (maxResult + 1 - (numOperands - i - 1) - previous)
      )
    );
  }
  console.log("Generation run server side: ", operands);
  return operands;
};
