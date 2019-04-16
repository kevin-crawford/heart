import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';


// TODO: 
// UserInfo mock component needs to be fleshed out once we have login capabilities.
// Navigation component needs media queries, userinfo component collapses below the navigation once screen size is less than 500px

class Navigation extends React.Component {
	render() {
 
		return(
			<div className="navigation">
				<ul className="navigation-list">
					<Link to="/" >
						<li>Heart</li>
					</Link>
					<Link to="/participants" >
						<li>Reporting</li>
					</Link>
					<Link to="/form">
						<li>Intake</li>
					</Link>
				</ul>
			</div>
		)
	}
}

export default Navigation;