import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MaintenanceApp } from './MaintenanceApp.jsx'

import { store } from './store/store.js'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
          <MaintenanceApp />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
