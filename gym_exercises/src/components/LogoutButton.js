import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from './Profile'

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0()
	if(isAuthenticated) {
		return (
			<>
				<button style={{ fontSize: '22px', padding: '5px', borderRadius: '20px' }}  onClick = {() => logout({ returnTo: window.location.origin })}>
					Logout
				</button>
			</>
		)
	}
}

export default LogoutButton