import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

//COMPONENTS
import Home from './components/home'
import User from './components/user'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Home}/>
				<Route path="/users/:userName" component={User}/>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<App/>, document.getElementById("root"))