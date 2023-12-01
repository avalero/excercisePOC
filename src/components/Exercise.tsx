"use client";
import { getOperands } from "@/app/actions";
import React, { FC, useEffect, useState } from "react";

const Exercise: FC<{ maxResult: number; operands: number }> = ({
  maxResult,
  operands,
}) => {
  console.log("Exercise");
  const [op, setOp] = useState<number[]>([]);
  useEffect(() => {
    getOperands(operands, maxResult).then((op) => setOp(op));
  }, [operands, maxResult]);

  if (Array.isArray(op))
    return (
      <div style={{ padding: "20px" }}>
        {op.join(" + ")} = <input type="number" />
      </div>
    );
  return <div>Invalid operands</div>;
};

export default Exercise;
