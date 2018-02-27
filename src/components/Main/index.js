import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllDbf } from '../../api';

import { getListRecordsAction } from '../../store/records';

import { authSelector, authLogoutAction, authLoginAction } from '../../store/auth';

import { userSelector } from '../../store/user';

import './style.css'

const mapStateToProps = (state) => ({
	auth: state.auth,
	recs: state.recs
});

//userSelector;
//const mapDispatchToProps = { logout: authLogoutAction }

const mapDispatchToProps = {
	setAuth: authLoginAction,
	getListRecords: getListRecordsAction
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

class Main extends React.Component {
	static propTypes = {
		user: PropTypes.object,
		logout: PropTypes.func
	};

	//logout = () => this.props.logout()

	async componentDidMount() {
		//const dbf = getAllDbf();

		try {
			const recs = await getAllDbf(); // потом добавить параметр авторизации
			this.props.getListRecords(recs);
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className="main-container">
				<div className="main-heading">
					<h1> Основное окно </h1>
				</div>
				<div className="main-menu">
					<p>меню</p>
				</div>
				<div className="main-content">
					<p>контент</p>
				</div>
				<div className="main-footer">
					<p>футтер</p>
				</div>
			</div>
		);
	}
}

export default enhance(Main);
// {this.props.user.login}
