import React from 'react';


class Status extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listOpen: false,
			loading: false,
			error: false,
			currentStatus: 'New Case',
			statusOptions: [
				{
					title: 'New Case',
				},
				{
					title: 'Obligation Form Completed',
				},
				{
					title: 'Attorney Review',
				},
				{
					title: 'Sent To Court',
				},
				{
					title: 'Recieved From Court',
				},
				{
					title: 'Sent To Participant',
				},
				{
					title: 'Closed'
				}
			],
			databases: [
				{
					title: 'CCHRS',
					selected: false,
					key: 'name'
				},
				{
					title: 'W&W',
					selected: false,
					key: 'name'
				},
				{
					title: 'DMV',
					selected: false,
					key: 'name'
				},
				{
					title: 'TCIS',
					selected: false,
					key: 'name'
				}
			]
		};
	}

	handleClickOutside(){
		this.setState({
			listOpen: false
		})
	}

	toggleList(){
		this.setState(prevState => ({
			listOpen: !prevState.listOpen
		}))
	}

	render() {
		const {listOpen, headerTitle, editing } = this.state;

		let databases = this.state.databases.map((database, index) => (
			<li className="database-item">
				{database.title}
			</li>
		));

		let statusOption = this.state.statusOptions.map((option, index) => (
			<li className="dd-list-item">
				{option.title}
			</li>
		))

		return (
			<div className="user-status--container">
				<p>Status:</p>
				
				<div className="dd-header" onClick={() => this.toggleList()}>
					<div className="dd-header-title">
						{this.state.currentStatus}
					</div>
						{listOpen 
							? '-'
							: '+'
						}
				</div>
					{listOpen && <ul className="dd-list">
						 {statusOption}
						</ul>
					}
			</div> 
		)
	}
};

export default Status;