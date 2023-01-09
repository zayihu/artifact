import React from 'react';
import ReactDOM from 'react-dom/client';
import Settings from "../components/pages/Settings";
import {store} from "../background";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Settings/>
        </Provider>
    </React.StrictMode>
);
