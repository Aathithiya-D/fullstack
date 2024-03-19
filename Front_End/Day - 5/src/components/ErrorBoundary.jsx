import { Component } from "react";
import PropTypes from 'prop-types';
import loader from '../assets/images/Error.gif';

export default class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state = { hasError : false}
    }

    static getDerivedStateFromError() {
        return { hasError : true }
    }  
    
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.hasError){
            return <div className="flex justify-center items-center h-screen"> 
                <img className="max-w-full max-h-full transform scale-150" src={loader} alt="loader" /> 
            </div>//use  img tag to gif
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
}