import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return (
    <ArwesFooter animate>
      <Centered>
        <Paragraph style={{ fontSize: 14, margin: "10px auto" }}>We invite you to join in on our expeditions.</Paragraph>
      </Centered>
    </ArwesFooter>
  );
};

export default Footer;
