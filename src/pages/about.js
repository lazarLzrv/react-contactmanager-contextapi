import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <h1 className="display-4">
                About Contact Manager
            </h1>
            <p className="lead">Simple app to manage contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
            </React.Fragment>
         );
    }
}
 
export default About;