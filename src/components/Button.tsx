import styled from "@emotion/styled";
import { useState } from "react";

const ButtonComponent = () => {
  const [primary, setPrimary] = useState(false);
  return (
    <div>
      Esto es client side:
      <br />
      <Button primary={primary} onClick={() => setPrimary(!primary)}>
        {primary ? "Primary" : "Secondary"}
      </Button>
    </div>
  );
};

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? "#333" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.primary ? "#444" : "#eee")};
  }
`;

export default ButtonComponent;
