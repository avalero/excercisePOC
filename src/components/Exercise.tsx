"use client";
import { getOperands, validate } from "@/app/actions";
import React, { FC, useEffect, useState } from "react";

const Exercise: FC<{
  maxResult: number;
  operands: number;
  regenerate: number;
}> = ({ maxResult, operands, regenerate }) => {
  console.log("Exercise");
  const [op, setOp] = useState<number[]>([]);
  useEffect(() => {
    setReview(false);
    getOperands(operands, maxResult).then((op) => setOp(op));
  }, [operands, maxResult, regenerate]);

  const [result, setResult] = useState<number>(0);
  const [validResult, setValidResult] = useState<number>(0);
  const [valid, setValid] = useState<boolean>(false);
  const [review, setReview] = useState<boolean>(false);

  if (Array.isArray(op))
    return (
      <div style={{ padding: "20px" }}>
        {op.join(" + ")} ={" "}
        <input
          type="number"
          onChange={(e) => setResult(Number(e.target.value))}
        />
        <br />
        <button
          onClick={() => {
            validate(op, result).then((res) => {
              setValidResult(res.result);
              setValid(res.correct);
              setReview(true);
            });
          }}
        >
          Enviar
        </button>
        {review && (
          <div>
            {valid ? (
              <div>
                <span style={{ color: "green" }}>Correcto</span>
              </div>
            ) : (
              <div>
                <span style={{ color: "red" }}>Incorrecto</span>
                <span>Correct result: {validResult}</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  return <div>Invalid operands</div>;
};

export default Exercise;
