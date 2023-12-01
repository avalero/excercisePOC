"use server";

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
  console.log("this is run server side: ", operands);
  return operands;
};
