import {NextComponentType} from "next";
import {Center, Table, TableCaption, TableContainer, Tbody, Td, Thead, Tr} from "@chakra-ui/react";
import DeadlineRow from "./deadline-row";

const DeadlineTable: NextComponentType = () => {
	return <Center mt={12}>
		<TableContainer>
			<Table size='lg' colorScheme='gray'>
				<TableCaption>deadlines appear here</TableCaption>
				<Thead>
					<Tr>
						<Td>title</Td>
						<Td>status</Td>
						<Td>started</Td>
						<Td>completed</Td>
					</Tr>
				</Thead>
				<Tbody>
					<DeadlineRow
						title='sample deadline title'
						description='sample description'
						colorScheme='green'
						status='done'
						startDate='30/07/2022'
						finishDate='01/07/2022'/>
					<DeadlineRow
						title='sample deadline title'
						description='sample description'
						colorScheme='red'
						status='late'
						startDate='30/07/2022'
						finishDate='01/07/2022'/>
					<DeadlineRow
						title='sample deadline title'
						description='sample description'
						colorScheme='green'
						status='done'
						startDate='30/07/2022'
						finishDate='01/07/2022'/>
					<DeadlineRow
						title='sample deadline title'
						description='sample description'
						colorScheme='purple'
						status='new'
						startDate='30/07/2022'
						finishDate='01/07/2022'/>
					<DeadlineRow
						title='sample deadline title'
						description='sample description'
						colorScheme='green'
						status='done'
						startDate='30/07/2022'
						finishDate='01/07/2022'/>
				</Tbody>
			</Table>
		</TableContainer>
	</Center>
}

export default DeadlineTable;
