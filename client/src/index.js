import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./store/Store";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "./config/config";
const root = ReactDOM.createRoot(document.getElementById("root"));
Sentry.init({
	dsn: process.env.REACT_APP_sentry,
	integrations: [new BrowserTracing()],
	tracesSampleRate: 1.0,
});
root.render(
	<GoogleOAuthProvider
		clientId={process.env.REACT_APP_googleAuthProviderClientId}
	>
		<React.StrictMode>
			<Provider store={store}>
				<App />
				<ToastContainer />
			</Provider>
		</React.StrictMode>
	</GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
