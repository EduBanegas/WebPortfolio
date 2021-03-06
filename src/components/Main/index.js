import AboutMe from '../AboutMe';
import Header from '../Header';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';


const Main = () => {
	return (
		<main>
			<Header />
			<AboutMe />
			<Skills />
			<hr />
			<Projects />
			<Contact />
		</main>
	);
};

export default Main;
