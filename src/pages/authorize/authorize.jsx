import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { setUser } from '../../actions';
import { authFormSchema } from './schema';
import { server } from '../../bff/bff';
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

const AuthorizeContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(error);
			} else {
				setServerError(null);
				dispatch(setUser(res));
				navigate('/');
			}
		});
	};

	const onChangeForm = () => setServerError(null);

	const validationError = errors?.login?.message || errors?.password?.message;
	const errorMessage = validationError || serverError;

	return (
		<div className={className}>
			<Form onSubmit={handleSubmit(onSubmit)} onChange={onChangeForm}>
				<FormTitle>Авторизация</FormTitle>
				<FormInput
					className="authorize-inputs-login"
					type="text"
					placeholder="Логин"
					{...register('login')}
				/>
				<FormInput
					className="authorize-inputs-password"
					type="password"
					placeholder="Пароль"
					{...register('password')}
				/>
				<FormButton
					className="content-filter-button"
					type="submit"
					disabled={validationError}
				>
					Войти
				</FormButton>

				<Link to="/register" className="authorize-to-register">
					Зарегистрироваться
				</Link>
			</Form>
			{!errorMessage ? null : <ErrorContainer>{errorMessage}</ErrorContainer>}
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

	& .authorize-to-register {
		font-size: 18px;
		text-decoration: underline;
	}
`;
