import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
	position: relative;
	margin: 0 auto;
	height: 100%;
	width: 1000px;
	background-color: #faf6f0;
`;

export const Magazine = () => {
	return (
		<>
			<AppColumn>
				<Header />
				{/* <Routes>
				<Route path="/" element={<AppColumn />} />
			</Routes> */}
				<Footer />
			</AppColumn>
		</>
	);
};
