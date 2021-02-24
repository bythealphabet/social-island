import React from "react";
import "react-hot-loader/patch";
import { hot } from "react-hot-loader";
import MainRouter from "./MainRouter";
import { ThemeProvider } from "@material-ui/styles";

import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<MainRouter />
			</ThemeProvider>
		</Router>
	);
};

export default hot(module)(App);
