import React from 'react'
import './UserInfo.scss'

// UserInfo mock up component, so far only renders a fake user ID, no functionality included.

class UserInfo extends React.Component {
	render() {
		return (
			<div className="user-container">
				<p>User123</p>
			</div>
		)
	}
}

export default UserInfo;