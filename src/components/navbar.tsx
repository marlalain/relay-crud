import {Flex, Link, Spacer} from "@chakra-ui/react";
import {NextComponentType} from "next";
import {Search2Icon, SettingsIcon} from "@chakra-ui/icons";

const Navbar: NextComponentType = () => {
	return <Flex p={3} border='0px' borderBottom='2px' borderBottomColor='blackAlpha.100'>
		<Link p={5} bg='red.100' fontSize={18}>
			logo
		</Link>

		<Spacer/>

		<Flex p={5} bg='green.100'>
			<Link>
				<Search2Icon w={5} h={5}/>
				<SettingsIcon ml={4} w={5} h={5}/>
			</Link>
		</Flex>
	</Flex>
}

export default Navbar;
