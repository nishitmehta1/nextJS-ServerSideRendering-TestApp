import Link from 'next/link';

const Index = () => (
	<div>
		<h1>My First Next Page (Server Side Rendering)</h1>
		<Link href='/about'>
			<a>About</a>
		</Link>
		<br></br>
		<Link href='/Robots'>
			<a>Robots</a>
		</Link>
		<br></br>

		<a href="/about">About - Client Side Rendering</a>
	</div>
);

export default Index