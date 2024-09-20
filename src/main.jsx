import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';

import ThemeWrapper from './components/template/ThemeWrapper.jsx';


import './index.css'
import store from './redux/store/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeWrapper>
    <App />
    </ThemeWrapper>
    </Provider>
  </StrictMode>,
)
