import type {NextPage} from "next";
import Header from "./header";
import Navbar from "../components/navbar";
import DeadlineInput from "../components/deadline/deadline-input";
import DeadlineTable from "../components/deadline/deadline-table";

const Home: NextPage = () => {
	return (
		<>
			<Header/>
			<Navbar/>
			<DeadlineInput/>
			<DeadlineTable/>
		</>
	);
};

export default Home;
