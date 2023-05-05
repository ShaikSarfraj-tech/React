import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './toggle.css'

const Toggle = ({ username }) => {
	const useToggle = (initialState) => {
		const [toggleValue, setToggleValue] = useState(initialState);
	
		const toggler = () => {
			setToggleValue(!toggleValue);
		}
		return [toggleValue, toggler];
	}
	
	const [toggle, setToggle] = useToggle();

	const { dispatch } = useContext(AuthContext);

	const navigate = useNavigate();

	// const handleSearch = () => {
    //     dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
    //     navigate("/hotels", {state: { destination, dates, options }})
    // }

	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	
	const handleLogout = () => {
        dispatch({ type: "LOGOUT", payload: { user, loading, error } });
        navigate("/", { state: { user, loading, error } });
		// setIsloggedin(false);
    }

	return (
		<div>
			<button onClick={setToggle} className='username'>
				{username}
			</button>
	
			{toggle && (
				<button onClick={handleLogout} className='logout'>Logout</button>
			)}
		</div>
	)
}

export default Toggle