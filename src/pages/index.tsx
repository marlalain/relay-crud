import type {NextPage} from "next";
import Header from "./header";
import Navbar from "../components/navbar";
import DeadlineInput from "../components/deadline/deadline-input";

const Home: NextPage = () => {
	return (
		<>
			<Header/>
			<Navbar/>
			<DeadlineInput/>
		</>
	);
};

export default Home;
