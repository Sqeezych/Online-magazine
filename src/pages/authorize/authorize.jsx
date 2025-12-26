import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthInput = styled.input`
	font-size: 21px;
	width: 270px;
	height: 40px;

	border: 1px solid #000;
	border-radius: 10px;

	padding: 0 10px;
	text-align: center;
`;

const AuthButton = styled.button`
	width: 270px;
	height: 50px;
	font-size: 21px;
	border: 1px solid #000;
	border-radius: 10px;
	background-color: #fdf3e2;
`;

const AuthorizeContainer = ({ className }) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const onChangeLogin = ({ target }) => {
		setLogin(target.value);
	};

	const onChangePassword = ({ target }) => {
		setPassword(target.value);
	};

	return (
		<div className={className}>
			<div className="authorize-title">Авторизация</div>
			<div className="authorize-inputs">
				<AuthInput
					className="authorize-inputs-login"
					type="text"
					placeholder="Логин"
					value={login}
					onChange={onChangeLogin}
				/>
				<AuthInput
					className="authorize-inputs-password"
					type="text"
					placeholder="Пароль"
					value={password}
					onChange={onChangePassword}
				/>
			</div>
			<AuthButton className="content-filter-button">Войти</AuthButton>
			<Link to="/register">
				<div className="authorize-to-register">Зарегистрироваться</div>
			</Link>
		</div>
	);
};

export const Authorize = styled(AuthorizeContainer)`
	width: 350px;
	height: 300px;
	background-color: #fff;

	border: 1px solid #000;
	border-radius: 10px;

	padding: 20px 40px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	& .authorize-title {
		font-size: 21px;
	}

	& .authorize-to-register {
		font-size: 18px;
		text-decoration: underline;
	}

	& .authorize-inputs-password {
		margin-top: 10px;
	}
`;
