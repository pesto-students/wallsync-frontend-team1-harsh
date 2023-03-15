import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Data input wrong</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
