import { Component } from 'react';
import { ImageStyle } from '../styles/AboutStyle';

class ErrorBoundary extends Component {
    state = { hasError: false, errorInfo: null }; // hasError: tracks whenever an error occurs, errorInfo: stores the error information

    // componentDidCatch is a lifecycle method that is called whenever an error occurs in a component
    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, errorInfo });
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) // if hasError is true the component renders a fallback UI 
            { 
            return <><img src="public\pics\sorry.png" alt="sorry" style={{ width: "100%" , height: "100%" }} />
            </>;
        }
        return this.props.children; // returns the children components if no error occurs 
    }
}

export default ErrorBoundary;
