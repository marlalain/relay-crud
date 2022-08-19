import {Badge, Td, Tooltip, Tr} from "@chakra-ui/react";
import {FunctionComponent} from "react";

type DeadlineRowProps = {
	title: string;
	description: string;
	colorScheme: string | 'green' | 'red' | 'purple';
	status: string;
	startDate: string;
	finishDate: string;
}

const DeadlineRow: FunctionComponent<DeadlineRowProps> = (
	{
		title,
		description,
		colorScheme,
		status,
		startDate,
		finishDate
	}) => {
	return <Tr>
		<Td>
			<Tooltip label={description} aria-label={description} placement='top' hasArrow>
				{title}
			</Tooltip>
		</Td>
		<Td>
			<Badge colorScheme={colorScheme}>{status}</Badge>
		</Td>
		<Td>{startDate}</Td>
		<Td>{finishDate}</Td>
	</Tr>
}

export default DeadlineRow;
