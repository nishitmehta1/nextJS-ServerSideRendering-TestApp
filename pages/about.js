import Link from 'next/link';
import Image from '../components/Image'


const About = () => {
	return (
		<div>
			<h1>Nishit Mehta</h1>
			<Link href='/'>
				<button>Back</button>
			</Link>
			<Image />
		</div>

	)
};

export default About;