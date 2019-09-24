import React, { Component } from 'react';

class TextInputGroup extends Component {
    state = {}
    
    render() { 

        const {label, name, value, placeholder, type='text'} = this.props;
        return ( 
            <div className="form-group">
                <label htmlFor="name">{label}</label>
                <input type={type}
                    name={name}
                    className="form-control form-control-lg"
                    placeholder={placeholder}
                    defaultValue={value}
                    />
            </div>          
         );
    }
}
 
export default TextInputGroup;