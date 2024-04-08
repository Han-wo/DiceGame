import RestImg from "../assets/ic-reset.svg";
import styled from "styled-components";

const Button = ({ onClick }) => {
  return (
    <ResetButton onClick={onClick}>
      <img src={RestImg} alt="리셋버튼" />
    </ResetButton>
  );
};

const ResetButton = styled.button`
  position: absolute;
  top: 48px;
  right: 49px;
  cursor: pointer;
  background: none;
  border: none;
`;

export default Button;
