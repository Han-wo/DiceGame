import rockImg from "../assets/rock.svg";
import scissorImg from "../assets/scissor.svg";
import paperImg from "../assets/paper.svg";
import styled from "styled-components";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

const HandImg = ({ className, value }) => {
  const src = IMAGES[value];
  return <IconImg className={className} src={src} alt={value} />;
};
const IconImg = styled.img`
  opacity: 0.87;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export default HandImg;
