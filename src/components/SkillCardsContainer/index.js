import { StyledCardsContainer } from "./styles";
import SkillCard from "../SkillCard";

import {
  Html5,
  CssThree,
  Javascript,
  Typescript,
  ReactJs,
  Sass,
  Redux,
  Firebase,
  Nodedotjs,
  Express,
  Postgresql,
  Mongodb,
  Less,
  Sequelize,
  Git,
  Github,
  Figma,
  Materialui,
  Bootstrap,
  Amazonaws,
} from "@icons-pack/react-simple-icons";

const SkillCards = () => {
  return (
    <StyledCardsContainer>
      <SkillCard Icon={Html5} text="HTML" />
      <SkillCard Icon={CssThree} text="CSS" />
      <SkillCard Icon={Javascript} text="JavaScript" />
      <SkillCard Icon={Typescript} text="TypeScript" />
      <SkillCard Icon={ReactJs} text="React" />
      <SkillCard Icon={Redux} text="Redux" />
      <SkillCard Icon={Firebase} text="Firebase" />
      <SkillCard Icon={Nodedotjs} text="Node.js" />
      <SkillCard Icon={Express} text="Express" />
      <SkillCard Icon={Sequelize} text="Sequelize" />
      <SkillCard Icon={Amazonaws} text="AmazonAws" />
      <SkillCard Icon={Postgresql} text="PostgreSQL" />
      <SkillCard Icon={Mongodb} text="MongoDb" />
      <SkillCard Icon={Git} text="Git" />
      <SkillCard Icon={Github} text="Github" />
      <SkillCard Icon={Bootstrap} text="Bootstrap" />
      <SkillCard Icon={Materialui} text="Materialui" />
      <SkillCard Icon={Figma} text="Figma" />
      <SkillCard Icon={Less} text="Less" />
      <SkillCard Icon={Sass} text="Sass" />
    </StyledCardsContainer>
  );
};

export default SkillCards;
