import styled from 'styled-components';

const LoaderContainer = ({ className }) => <div className={className}></div>;

export const Loader = styled(LoaderContainer)`
	width: 50px;
	height: 50px;

	border: 5px solid #000;
	border-radius: 50%;
`;
