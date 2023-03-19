import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import PopupPage from '../pages/popup';

const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);
root.render(createElement(PopupPage));
