import React, { Component } from 'react';
import {Link} from "react-router-dom"

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <h1 className="display-4">
               <span className="text-danger">404</span> Not Found
            </h1>
            <p className="lead">This Page is not Found</p>
            <Link to='/' className="text-danger">Back to Homepage</Link>
            </React.Fragment>
         );
    }
}
 
export default About;