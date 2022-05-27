import { StyledCardsContainer } from './styles';
import SkillCard from '../SkillCard';

import {
    Html5,
    CssThree,
    Sass,
    ReactJs,
    Redux,
    Nodedotjs,
    Express,
    Postgresql,
    Javascript,
    Typescript,
    Less,
    Sequelize,
    Git,
    Github,
    Figma,
    Materialui,
    Bootstrap,
    Amazonaws
} from '@icons-pack/react-simple-icons';

const SkillCards = () => {
    return (
        <StyledCardsContainer>
            <SkillCard Icon={Html5} text='HTML' />
            <SkillCard Icon={CssThree} text='CSS' />
            <SkillCard Icon={Javascript} text='JavaScript' />
            <SkillCard Icon={Typescript} text='TypeScript' />
            <SkillCard Icon={ReactJs} text='React' />
            <SkillCard Icon={Redux} text='Redux' />
            <SkillCard Icon={Nodedotjs} text='Node.js' />
            <SkillCard Icon={Express} text='Express' />
            <SkillCard Icon={Sequelize} text='Sequelize' />
            <SkillCard Icon={Postgresql} text='PostgreSQL' />
            <SkillCard Icon={Git} text='Git' />
            <SkillCard Icon={Github} text='Github' />
            <SkillCard Icon={Sass} text='Sass' />
            <SkillCard Icon={Less} text='Less' />
            <SkillCard Icon={Figma} text='Figma' />
            <SkillCard Icon={Materialui} text='Materialui' />
            <SkillCard Icon={Bootstrap} text='Bootstrap' />
            <SkillCard Icon={Amazonaws} text='AmazonAws'/>
        </StyledCardsContainer>
    );
};

export default SkillCards;
