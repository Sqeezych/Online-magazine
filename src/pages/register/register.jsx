// import { server } from '../../bff';
import styled from 'styled-components';

const FormTitle = styled.h2`
	font-weight: 400;
	font-size: 21px;
`;
const FormInput = styled.input`
	font-size: 21px;
	width: 270px;
	height: 40px;

	border: 1px solid #000;
	border-radius: 10px;

	padding: 0 10px;
	text-align: center;
`;
const FormButton = styled.button`
	width: 270px;
	height: 50px;
	font-size: 21px;
	border: 1px solid #000;
	border-radius: 10px;
	background-color: #fdf3e2;
`;

const RegisterContainer = ({ className }) => {
	const onSubmit = { login, password };

	return (
		<div className={className}>
			<FormTitle>Регистрация</FormTitle>
			<FormInput
				className="register-inputs-login"
				type="text"
				placeholder="Логин"
			/>
			<FormInput
				className="register-inputs-password"
				type="password"
				placeholder="Пароль"
			/>
			<FormInput
				className="register-inputs-confirm-password"
				type="password"
				placeholder="Повторите пароль"
			/>
			<FormButton className="content-filter-button">Зарегистрироваться</FormButton>
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

	& .register-to-register {
		font-size: 18px;
		text-decoration: underline;
	}
`;
