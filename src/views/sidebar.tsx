import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from '../components/pages/Sidebar'
import { Provider } from 'react-redux'
import { store } from '../background'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Sidebar/>
        </Provider>
    </React.StrictMode>
)
