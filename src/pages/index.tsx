import type {NextPage} from "next";
import Header from "./header";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
	return (
		<>
			<Header/>
			<Navbar/>
		</>
	);
};

export default Home;
