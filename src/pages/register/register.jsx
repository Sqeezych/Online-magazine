import { useState } from 'react';
import styled from 'styled-components';

const RegInput = styled.input`
	font-size: 21px;
	width: 270px;
	height: 40px;

	border: 1px solid #000;
	border-radius: 10px;

	padding: 0 10px;
	text-align: center;
`;

const RegButton = styled.button`
	width: 270px;
	height: 50px;
	font-size: 21px;
	border: 1px solid #000;
	border-radius: 10px;
	background-color: #fdf3e2;
`;

const RegisterContainer = ({ className }) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onChangeLogin = ({ target }) => {
		setLogin(target.value);
	};

	const onChangePassword = ({ target }) => {
		setPassword(target.value);
	};

	const onChangeConfirmPassword = ({ target }) => {
		setConfirmPassword(target.value);
	};

	return (
		<div className={className}>
			<div className="register-title">Регистрация</div>
			<div className="register-inputs">
				<RegInput
					className="register-inputs-login"
					type="text"
					placeholder="Логин"
					value={login}
					onChange={onChangeLogin}
				/>
				<RegInput
					className="register-inputs-password"
					type="text"
					placeholder="Пароль"
					value={password}
					onChange={onChangePassword}
				/>
				<RegInput
					className="register-inputs-confirm-password"
					type="text"
					placeholder="Повторите пароль"
					value={confirmPassword}
					onChange={onChangeConfirmPassword}
				/>
			</div>
			<RegButton className="content-filter-button">Зарегистрироваться</RegButton>
		</div>
	);
};

export const Register = styled(RegisterContainer)`
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

	& .register-title {
		font-size: 21px;
	}

	& .register-to-register {
		font-size: 18px;
		text-decoration: underline;
	}

	& .register-inputs-password {
		margin: 10px 0;
	}
`;
