import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { MainPage, Authorize, Register, Product, AddProduct } from './pages';
import styled from 'styled-components';

const AppColumn = styled.div`
	position: relative;
	padding: 150px 50px 150px 50px;
	margin: 0 auto;
	min-height: 100%;
	width: 1000px;
	background-color: #faf6f0;
`;

export const Magazine = () => {
	return (
		<AppColumn>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/authorize" element={<Authorize />} />
				<Route path="/register" element={<Register />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/add-product" element={<AddProduct />} />
				<Route path="*" element={<div>Ошибка</div>} />
			</Routes>
			<Footer />
		</AppColumn>
	);
};
