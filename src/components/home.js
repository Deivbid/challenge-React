import React, {Component} from 'react'
import Header from './header'
import UserList from './userList'


const URL_USERS= 'https://api.github.com/users'

class Home extends Component {
	constructor(props){
		super(props)

		this.state = {
			users:'',
		}
	}

	componentDidMount(){
		fetch(URL_USERS, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => {
			this.setState({
				artists:json
			})
		})
	}

	render(){
		return(
			<div>
				<Header/>
				<UserList allUsers={this.state.users}></UserList>
			</div>
		)
	}
}

export default Home