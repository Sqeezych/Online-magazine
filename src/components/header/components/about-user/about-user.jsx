import { useDispatch } from 'react-redux';
import { Icon } from '../../../icon/icon.jsx';
import { LOGOUT } from '../../../../actions';
import styled from 'styled-components';

const AboutUserContainer = ({ className, user }) => {
	const dispatch = useDispatch();

	const splicedLogin = (login) => {
		if (login.length >= 35) {
			return login.slice(0, 36) + '...';
		} else {
			return login;
		}
	};

	function onClick() {
		dispatch(LOGOUT);
	}

	return (
		<div className={className}>
			<div className="login">{splicedLogin(user.login)}</div>
			<Icon id="fa-sign-out" size="25px" inactive={false} onClick={onClick} />
		</div>
	);
};

export const AboutUser = styled(AboutUserContainer)`
	display: flex;
	align-items: center;
	justify-content: right;

	height: 50px;
	width: 400px;

	& .login {
		font-size: 19px;
		color: #8a1f1f;

		margin-right: 10px;
	}
`;
