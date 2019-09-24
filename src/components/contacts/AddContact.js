import React, { Component } from 'react';
import {Consumer} from "../../context";
import TextInputGroup from '../layout/TextInputGroup' 

class AddContact extends Component {
    state = { 
        name:"",
        email:"",
        phone:""
     }

     onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value}) 
     }

     onSubmit = (dispatch, e) =>{
        e.preventDefault() 

        fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                name:e.target.name.value,
                email:e.target.email.value, 
                phone:e.target.phone.value
            }),
        })
        .then(response => response.json())
        .then(json => { 
            dispatch({type: 'ADD_CONTACT', payload:json})  
            this.props.history.push('/')
        })
        
       
     }

    render( ) { 
        const {name, email, phone} = this.state
       
        return (
            <Consumer>
            {value => {
                const { dispatch } = value;
                return ( 
                    <div className="card mb-3">
                    <div className="card-header">
                        Add Contact
                    </div>

                    <div className="card-body">
                        <form onSubmit={(e)=>this.onSubmit(dispatch, e)}>
                            <TextInputGroup 
                                label='Name'
                                type='text'
                                name='name'
                                placeholder="Enter Name...."
                                defaultValue={name}
                            />
                            <TextInputGroup 
                                label='Email'
                                type='email'
                                name='email'
                                placeholder="Enter Email...."
                                defaultValue={email}
                            /> 
                            <TextInputGroup 
                                label='phone'
                                type='text'
                                name='phone'
                                placeholder="Enter Phone...."
                                defaultValue={phone}
                            />  
                            <input type="submit" value="submit" className="btn btn-light btn-block"/>
                        </form>
                    </div>
                </div>
                )
            }}
            </Consumer>
        );
    }
}
 
export default AddContact;