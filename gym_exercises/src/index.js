import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        {/* <Auth0Provider
            domain="dev-2fg2c3y66ip8oon6.us.auth0.com"
            clientId="MPG2kYASo2S4hID9XQpM7c6jTTCH2iAV"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        > */}
            <App />
        {/* </Auth0Provider> */}
    </BrowserRouter>
)