import React, { useContext } from 'react';
import { StyledFooter } from './styles';
import { LanguageContext } from '../../LangContext';
import strings from './strings';
import Container from '../Container';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';

const Footer = () => {
	const { Lang } = useContext(LanguageContext);
	const s = strings[Lang];

	return (
		<StyledFooter>
			<Container>
				<div className='footer__icons'>
					<ul>
						<li>
							<a
								href='https://github.com/EduBanegas'
								target='_blank'
								rel='noopener noreferrer'
								aria-label={s.github}
							>
								<Github size={35} />
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/in/eduardo-banegas-85330a174/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label={s.linkedin}
							>
								<Linkedin size={35} />
							</a>
						</li>
					</ul>
				</div>
				<p className='footer__mail'>
					<a href='mailto:l.eduardo.banegas@gmail.com'>Contactame: l.eduardo.banegas@gmail.com</a>
				</p>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
