import {Badge, Td, Tr} from "@chakra-ui/react";
import {FunctionComponent} from "react";

type DeadlineRowProps = {
	title: string;
	colorScheme: string | 'green' | 'red' | 'purple';
	status: string;
	startDate: string;
	finishDate: string;
}

const DeadlineRow: FunctionComponent<DeadlineRowProps> = (
	{
		title,
		colorScheme,
		status,
		startDate,
		finishDate
	}) => {
	return <Tr>
		<Td>{title}</Td>
		<Td>
			<Badge colorScheme={colorScheme}>{status}</Badge>
		</Td>
		<Td>{startDate}</Td>
		<Td>{finishDate}</Td>
	</Tr>
}

export default DeadlineRow;
