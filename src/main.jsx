import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Magazine } from './Magazine.jsx';
// import { Provider } from 'react-redux';
import './index.css';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		{/* <Provider store={store}> */}
		<Magazine />
		{/* </Provider> */}
	</BrowserRouter>,
);
