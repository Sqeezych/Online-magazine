import { Link } from 'react-router-dom';
import { Button } from '../../../button/button';

export const EnterButton = () => {
	return (
		<Link to="/authorize">
			<Button>Войти/регистрация</Button>
		</Link>
	);
};
