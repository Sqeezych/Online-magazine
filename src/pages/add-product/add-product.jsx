import { AddProductForm } from './components/add-product-form/add-product-form.jsx';
import styled from 'styled-components';

const AddProductContainer = ({ className }) => {
	return (
		<div className={className}>
			<AddProductForm />
			<div className="ChangeProduct"></div>
		</div>
	);
};

export const AddProduct = styled(AddProductContainer)`
	display: flex;
	justify-content: space-between;

	height: 764px;
	width: 900px;

	padding: 50px 40px;

	background-color: #fff;

	border: 1px solid #000;
	border-radius: 10px 10px 0 0;
`;
