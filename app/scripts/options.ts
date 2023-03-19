import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import PreferencesPage from '../pages/preferences';

const app = document.getElementById('root') as HTMLElement;
const root = createRoot(app);
root.render(createElement(PreferencesPage));
