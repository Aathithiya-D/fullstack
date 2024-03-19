import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Store, { persistor } from '../redux/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store = {Store}>
        <PersistGate loading = {false} persistor={persistor}>  
          <App />
        </PersistGate>  
      </Provider>  
    </BrowserRouter>
)
