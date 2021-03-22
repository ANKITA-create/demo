import React from 'react'
import EmployeeList from './EmployeeList'
const Hero = ({handleLogout}) => {
	return (
		<section className="hero">

			<nav>
			<h2>Welcome</h2>

			<button onClick={handleLogout}>Logout</button>
			</nav>			
			<EmployeeList />
		</section>

	)
}

export default Hero