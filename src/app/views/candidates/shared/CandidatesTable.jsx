import React from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled } from '@mui/system'
import {
	Card,
	Icon,
	IconButton,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	MenuItem,
	Select,
	Button
} from '@mui/material'

const CardHeader = styled('div')(() => ({
	paddingLeft: '24px',
	paddingRight: '24px',
	marginBottom: '12px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
	fontSize: '1rem',
	fontWeight: '500',
	textTransform: 'capitalize',
}))

const ProductTable = styled(Table)(() => ({
	minWidth: 400,
	whiteSpace: 'pre',
	'& small': {
		height: 15,
		width: 50,
		borderRadius: 500,
		boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
	},
	'& td': {
		borderBottom: 'none',
	},
	'& td:first-of-type': {
		paddingLeft: '16px !important',
	},
}))


const CandidatesTable = () => {
	return (
		<Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
			<CardHeader>
				<Title>Candidates</Title>
				<Select size="small" defaultValue="this_month">
					<MenuItem value="this_month">This Month</MenuItem>
					<MenuItem value="last_month">Last Month</MenuItem>
				</Select>
				<Button>
					Add Candidates
				</Button>
			</CardHeader>
			<Box overflow="auto">
				<ProductTable>
					<TableHead>
						<TableRow>
							<TableCell sx={{ px: 3 }} colSpan={2}>
								Name
							</TableCell>
							<TableCell sx={{ px: 0 }} colSpan={2}>
								Gender
							</TableCell>
							<TableCell sx={{ px: 0 }} colSpan={2}>
								Phone
							</TableCell>
							<TableCell sx={{ px: 0 }} colSpan={2}>
								Email
							</TableCell>
							<TableCell sx={{ px: 0 }} colSpan={2}>
								Work Information
							</TableCell>
							<TableCell sx={{ px: 0 }} colSpan={2}>
								Action
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{candidatesList.map((candidate, index) => (
							<TableRow key={index} hover>
								<TableCell
									colSpan={2}
									align="left"
									sx={{ px: 0, textTransform: 'capitalize' }}
								>
									<Box display="flex" alignItems="center">
										<Paragraph sx={{ m: 0, ml: 4 }}>{candidate.name}</Paragraph>
									</Box>
								</TableCell>
								<TableCell
									align="left"
									colSpan={2}
									sx={{ px: 0, textTransform: 'capitalize' }}
								>
								{candidate.gender}
								</TableCell>

								<TableCell sx={{ px: 0 }} align="left" colSpan={2}>
									{candidate.phone}
								</TableCell>
								<TableCell sx={{ px: 0 }} align="left" colSpan={2}>
									{candidate.email}
								</TableCell>
								<TableCell sx={{ px: 0 }} align="left" colSpan={2}>
									{candidate.work}
								</TableCell>
								<TableCell sx={{ px: 0 }} colSpan={1}>
									<IconButton>
										<Icon color="primary">edit</Icon>
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</ProductTable>
			</Box>
		</Card>
	)
}

const candidatesList = [
	{
		name: 'John kim',
		gender: 'Male',
		phone: 9876543210,
		email: 'test@testmail.com',
		work: 'test company'
	},
	{
		name: 'John kim',
		gender: 'Male',
		phone: 9876543210,
		email: 'test@testmail.com',
		work: 'test company'
	},
	{
		name: 'John kim',
		gender: 'Male',
		phone: 9876543210,
		email: 'test@testmail.com',
		work: 'test company'
	},
	{
		name: 'John kim',
		gender: 'Male',
		phone: 9876543210,
		email: 'test@testmail.com',
		work: 'test company'
	},
	{
		name: 'John kim',
		gender: 'Male',
		phone: 9876543210,
		email: 'test@testmail.com',
		work: 'test company'
	},
]

export default CandidatesTable
