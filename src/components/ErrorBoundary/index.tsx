import React from 'react';

export interface PropsErrorBoundary {
    loadingComponent?: React.ReactNode
}

export interface StateErrorBoundary {
    hasError: boolean
}

class ErrorBoundary extends React.Component<PropsErrorBoundary, StateErrorBoundary> {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
        console.log({error, errorInfo});
    }

    render() {
        const {hasError} = this.state;
        const {children, loadingComponent} = this.props;

        return hasError 
            ? loadingComponent || <h1>Something went wrong!</h1>
            : children
    }
}

export default ErrorBoundary;