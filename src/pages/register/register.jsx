import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff/bff';
import { registerFormSchema } from './schema';
import styled from 'styled-components';

const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
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
const ErrorContainer = styled.div`
	background-color: #f8abab;
	border: 1px solid #000;
	border-radius: 10px;

	position: absolute;
	top: 320px;
	left: 0;
	width: 100%;
	min-height: 60px;
	padding: 20px 20px;

	font-size: 17px;
	text-align: center;
`;

const SuccessRegistrationWindow = styled.div`
	background-color: #9bdfac;
	border: 1px solid #000;
	border-radius: 10px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	padding: 20px 20px;

	font-size: 24px;
	text-align: center;
`;

const RegisterContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(registerFormSchema),
	});
	const [serverError, setServerError] = useState(null);
	const [successRegistration, setSuccessRegistration] = useState(false);

	const navigate = useNavigate();

	const showSuccessRegistrationWindow = () => {
		setSuccessRegistration(true);
		setTimeout(() => {
			setSuccessRegistration(false);
			navigate('/authorize');
		}, 3000);
	};

	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error }) => {
			if (error) {
				setServerError(error);
			} else {
				setServerError(null);
				reset();
				showSuccessRegistrationWindow();
			}
		});
	};

	const onChangeForm = () => {
		setServerError(null);
	};

	const validationError =
		errors?.login?.message ||
		errors?.password?.message ||
		errors?.confirmPassword?.message;
	const errorMessage = validationError || serverError;

	return (
		<div className={className}>
			<Form onSubmit={handleSubmit(onSubmit)} onChange={onChangeForm}>
				<FormTitle>Регистрация</FormTitle>
				<FormInput
					className="register-inputs-login"
					type="text"
					placeholder="Логин"
					{...register('login')}
				/>
				<FormInput
					className="register-inputs-password"
					type="password"
					placeholder="Пароль"
					{...register('password')}
				/>
				<FormInput
					className="register-inputs-confirm-password"
					type="password"
					placeholder="Подтвердите пароль"
					{...register('confirmPassword')}
				/>
				<FormButton
					className="content-filter-button"
					type="submit"
					disabled={validationError}
				>
					Зарегистрироваться
				</FormButton>
			</Form>
			{errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : null}
			{successRegistration ? (
				<SuccessRegistrationWindow>
					Вы успешно зарегистрировались
				</SuccessRegistrationWindow>
			) : null}
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
