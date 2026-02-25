import { Routes, Route } from 'react-router-dom';
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
import styled from 'styled-components';

const AppColumn = styled.div`
	position: relative;
	padding: 150px 50px 150px 50px;
	margin: 0 auto;
	min-height: 100%;
	width: 1000px;
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
				<Route path="/cart" element={<Cart />} />
				<Route path="/access-error" element={<AccessError />} />
				<Route path="*" element={<div>Ошибка</div>} />
			</Routes>
			<Footer />
		</AppColumn>
	);
};
