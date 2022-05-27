import React, { useContext } from 'react';
import { LanguageContext } from '../../LangContext';
import { StyledProjects } from './styles';
import strings from './strings';

import H2 from '../H2';
import Container from '../Container';
import Project from '../Project';
import myFriendsList from '../../assets/myFriendsList.png';
import ONG from '../../assets/ONG.png';
import activitiesList from '../../assets/activitiesList.png';


const Projects = () => {
	const { Lang } = useContext(LanguageContext);
	const s = strings[Lang];

	return (
		<StyledProjects id='portfolio'>
			<Container>
				<div className='projects__header'>
					<H2 alternative='alternative'>Portfolio</H2>
					<p>{s.description}</p>
				</div>

				<div className='projects__list'>
					<Project
						title=' Coding To Help'
						desc={s.codingToHelp.description}
						img={ONG}
						link1='https://ong-client.vercel.app/'
						link1Aria={s.codingToHelp.ariaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/EduBanegas/Pagina-ONGs.git'
						link2Aria={s.codingToHelp.ariaRepository}
						text2={s.buttonRepository}
					/>

					<Project
						title='MyFriendsLIst'
						desc={s.myFriendsList.description}
						img={myFriendsList}
						link1='https://myfriendslist987.herokuapp.com/'
						link1Aria={s.myFriendsList.ariaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/EduBanegas/MyFriendsList-RoR'
						link2Aria={s.myFriendsList.ariaRepository}
						text2={s.buttonRepository}
					/>

					<Project
						title='ActivitiesList'
						desc={s.activitiesList.description}
						img={activitiesList}
						link1='https://activitieslist.herokuapp.com/'
						link1Aria={s.activitiesList.ariaWebsite}
						text1={s.buttonWebsite}
						link2='https://github.com/EduBanegas/ActivitiesList'
						link2Aria={s.activitiesList.ariaRepository}
						text2={s.buttonRepository}
					/>
				

				</div>
			</Container>
		</StyledProjects>
	);
};

export default Projects;
