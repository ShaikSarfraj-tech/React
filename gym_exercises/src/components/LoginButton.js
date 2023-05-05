import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	if(!isAuthenticated) {
		return (
			<button style={{ fontSize: '22px', padding: '5px', borderRadius: '20px' }} onClick={() => loginWithRedirect()}>
				Login
			</button>
		)
	}
}

export default LoginButton