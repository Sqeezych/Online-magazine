import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Magazine } from './magazine.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';
// @ts-ignore
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element is not found');
}

const root = createRoot(rootElement);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Magazine />
		</Provider>
	</BrowserRouter>,
);
