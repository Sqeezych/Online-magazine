import { useAppDispatch } from '../../../../hooks';
import { Icon } from '../../../icon';
import { logout } from '../../../../actions';
import type { UserStateType } from '../../../../reducers';
import styled from 'styled-components';

interface AboutUserProps {
	className?: string;
	user: UserStateType
}

const AboutUserContainer = ({ className, user }: AboutUserProps) => {
	const dispatch = useAppDispatch();

	const splicedLogin = (login: string) => {
		if (login.length >= 35) {
			return login.slice(0, 36) + '...';
		} else {
			return login;
		}
	};

	function onClick() {
		dispatch(logout(user.session));
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
	max-width: 400px;

	& .login {
		font-size: 19px;
		color: #8a1f1f;

		margin-right: 10px;
	}
`;
