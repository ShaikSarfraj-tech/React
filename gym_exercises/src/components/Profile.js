import React from 'react'
import { Typography, Stack } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton';
import Logo from '../assets/images/Logo.png'

const Profile = () => {
		const { user, isAuthenticated, isLoading } = useAuth0();
		if(isLoading) {
			return <div> Loading... </div>
		}
		return (
			// <div>
			// 	<Typography>Name: {user.name}</Typography>
			// 	<Typography>Given Name: {user.given_name}</Typography>
			// 	<Typography>Family Name: {user.family_name}</Typography>
			// 	<Typography>Email: {user.email}</Typography>
			// 	<Typography>Sub: {user.Sub}</Typography>
			// 	<LogoutButton />
			// </div>
			isAuthenticated &&	(<div>
				<Typography> Profile </Typography>
				<Typography>Name: {user.name}</Typography>
				<Typography>Given Name: {user.given_name}</Typography>
				<Typography>Family Name: {user.family_name}</Typography>
			 	<Typography>Email: {user.email}</Typography>
			 	<Typography>Sub: {user.Sub}</Typography>
			 	<LogoutButton />
			</div>)
		)
}

export default Profile