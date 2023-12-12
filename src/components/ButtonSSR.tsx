import styled from "@emotion/styled";

const ButtonComponent = () => {
  return (
    <div>
      Esto es client side:
      <br />
      <Button primary={true}>Primary</Button>
      <br />
      <Button primary={false}>Secondary</Button>
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
