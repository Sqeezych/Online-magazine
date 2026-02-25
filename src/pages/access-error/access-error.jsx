import styled from 'styled-components';

const AccessErrorContainer = ({ className }) => {
	return <div className={className}>Доступ запрещен</div>;
};

export const AccessError = styled(AccessErrorContainer)`
	font-size: 20px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
