import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from "../components/pages/Sidebar";
import {store} from "../background";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Sidebar/>
        </Provider>
    </React.StrictMode>
);
