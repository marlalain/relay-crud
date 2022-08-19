import {NextComponentType} from "next";
import {Box, Button, Center, Flex, Input} from "@chakra-ui/react";

const DeadlineInput: NextComponentType = () => {
	return <Center bg='blackAlpha.50' pb={10}>
		<Flex mt={12} w='60%' h='20%'>
			<Box flexGrow={1}>
				<Input bg='white' size='lg' placeholder='Type a deadline title...'/>
			</Box>

			<Box w={2}/>

			<Box>
				<Button height='100%' variant='ghost' colorScheme='gray'>Enter</Button>
			</Box>
		</Flex>
	</Center>
}

export default DeadlineInput;
