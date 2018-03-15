import React from 'react'
import  {Link} from 'react-router-dom'

const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

const UsersList = () => {

	const list = () => {

			return topFive.map((item) => {				
				return(
					<Link 
					key={item} to={`/users/${item}`}
					className = "btn btn-primary boton"
					>
						<div>{item}</div>
					</Link>
				)
			})
	}

	return (
		<div className="users">
			<h4> Top 5 Github Users </h4>
			<p> tap the username to see more information</p>
			{list()}
		</div>
	)
}

export default UsersList