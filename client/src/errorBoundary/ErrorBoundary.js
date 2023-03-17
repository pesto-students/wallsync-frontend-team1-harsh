import React from "react";
import "./errorBoundary.css";

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
			return <span className="errorSpan">Error: Limit cannot be greater.</span>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
