import React, { Component } from 'react';
import {Consumer} from "../../context"
import {Link} from "react-router-dom"

class Contact extends Component { 
    state = { 
        showContactInfo:false,
        rotateArrow:false,
    }  
     
    onShowInfo = () =>{
       this.setState({
        showContactInfo: !this.state.showContactInfo,
        rotateArrow: !this.state.rotateArrow
        }) 
    }

    onDeleteClick = (id, dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users/id'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json' 
            }
        }).then(response => dispatch({type: 'DELETE_CONTACT', payload:id}))  
    }

    render() { 
        const {id, name:userName="Incognito", email="hidden", phone='hidden'} = this.props.contact

        return ( 
            <Consumer>
                {value => {
                        const { dispatch } = value; 
                        return ( 
                            <div className="card card-body mb-3">
                            <h4>{userName} 
                                <i onClick={this.onShowInfo}  
                                className={"fa fa-sort-down " + (this.state.rotateArrow && "rotateArrow") }>
                                </i>
                                <i className="fa fa-times" onClick={()=>this.onDeleteClick(id, dispatch)}></i>
                                <Link to={"/edit/"+id}><i className="fa fa-edit"></i></Link>    
                            </h4>
                      
                            {this.state.showContactInfo && <ul className="list-group">
                                <li className="list-group-item">Email : {email}</li>
                                <li className="list-group-item">Phone : {phone}</li>
                            </ul>}
                            
                        </div>
                        )
                    }
                }
            </Consumer>
           
         );
    }
}
 
export default Contact;