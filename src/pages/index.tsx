import type {NextPage} from "next";
import Header from "./header";

const Home: NextPage = () => {
	return (
		<>
			<Header/>
			<div>
				<h1>
					Hello, World
				</h1>
			</div>
		</>
	);
};

export default Home;
