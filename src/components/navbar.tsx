import {Flex, Link, Spacer, useToast} from "@chakra-ui/react";
import {NextComponentType} from "next";
import {Search2Icon, SettingsIcon} from "@chakra-ui/icons";

const Navbar: NextComponentType = () => {
	const toast = useToast()
	const notImplemented = () => toast({
		title: 'Not Implemented',
		description: 'This wasn\'t implemented yet.',
		status: "error",
		isClosable: true
	})

	return <Flex p={3} border='0px' borderBottom='2px' borderBottomColor='blackAlpha.100'>
		<Link p={5} bg='red.100' fontSize={18}>
			logo
		</Link>

		<Spacer/>

		<Flex p={5} bg='green.100'>
			<Link>
				<Search2Icon onClick={notImplemented} w={5} h={5}/>
				<SettingsIcon onClick={notImplemented} ml={4} w={5} h={5}/>
			</Link>
		</Flex>
	</Flex>
}

export default Navbar;
