import React from 'react'
import './MainComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from '../actions/index'

const MainComponent = () => {
	const myState = useSelector((state) => state.changeNumber)
	const dispatch = useDispatch()
	return (
		<div className='main'>
			{/* dispatch triggers action */}
			<button onClick={() => dispatch(decNumber())}>	
				-
			</button>
			<h3>{myState}</h3>
			<button onClick={() => dispatch(incNumber())}>
				+
			</button>
		</div>
	)
}

export default MainComponent