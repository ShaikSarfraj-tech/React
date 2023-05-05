import React from 'react'
import { Button, Typography } from '@mui/material'
import './account.css'

const Account = () => {
	return (
		<div className='profile' style={{ padding: '150px 100px 100px 500px' }}>
			<Typography fontSize={40}>Profile</Typography>
			<form>
				<label className='lble'>Name</label> 
				<input type='text' val="" placeholder='Enter your name' /> <br/>
				<label className='lble'>Gender</label>
				<select name="gender">
					<option>Male</option>
					<option>Female</option>
					<option>Prefer Not to Disclose</option>
				</select> <br/>
				<label className='lble'>Email</label>
				<input type='email' val="" /> <br/>
				<label className='lble'>Date Of Birth</label>
				<input type="date" val="" /> <br/>
				<label className='lble'>Phone Number</label>
				<input type='number' val="" /> <br />
				<Button>Save</Button>
			</form>
		</div>
	)
}

export default Account