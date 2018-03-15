import React, {Component} from 'react'


const REQ_URL = 'https://api.github.com/users'

class User extends Component {

	constructor(props){
		super(props)

		this.state = {
			user:'',
		}
	}

	componentDidMount(){

		
		//console.log(this.props.match.params)
		fetch(`${REQ_URL}/${this.props.match.params.userName}`,{
			method: 'GET'
		})
			.then(response => response.json())
			.then(json => {
				this.setState({
					user: json
				})

				console.log(json);
			})

	}

	render(){
		return(
			
				<div className="user_bio">
					<div className="avatar">
						<span style={{background:`url(${this.state.user.avatar_url})`}}></span>
					</div>
					<div className="bio">
						<h3>{this.state.user.name}</h3>
						<div className="bio_text">
							{this.state.user.location}
						</div>
					</div>
				</div>
		)
	}
}


export default User