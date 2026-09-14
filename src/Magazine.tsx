import { Routes, Route } from 'react-router-dom';
import { sessions } from './bff/sessions';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { setUser } from './actions';
import { Header, Footer } from './components';
import {
	AddProduct,
	AccessError,
	Authorize,
	Cart,
	Register,
	MainPage,
	Product,
} from './pages';
import type { UserSession } from './types';
import styled from 'styled-components';

const AppColumn = styled.div`
	position: relative;
	padding: 150px 50px;
	margin: 0 auto;
	min-height: 100%;
	width: 1000px;
`;

export const Magazine = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		try {
			const storedData = localStorage.getItem('userData');
			if (storedData) {
				const user: UserSession = JSON.parse(storedData);
				sessions.add(user.session, user);
				dispatch(setUser(user));
			}
		} catch (error) {
			console.log(error);
			localStorage.removeItem('userData');
		}

	}, [])

	return (
		<AppColumn>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/authorize" element={<Authorize />} />
				<Route path="/register" element={<Register />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/add-product" element={<AddProduct />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/access-error" element={<AccessError />} />
				<Route path="*" element={<div>Ошибка</div>} />
			</Routes>
			<Footer />
		</AppColumn>
	);
};
