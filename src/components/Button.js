import ResetIcon from "../assets/ic-reset.svg";

const Button = ({ onClick }) => {
  return (
    <button className="resetButton" onClick={onClick} style={resetButton}>
      <img src={ResetIcon} alt="리셋버튼"></img>
    </button>
  );
};

const resetButton = {
  position: "absolute",
  top: "48px",
  right: "49px",
  cursor: "pointer",
};

export default Button;
