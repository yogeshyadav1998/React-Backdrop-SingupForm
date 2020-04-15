import React, { Component } from 'react';

import './Modal.css';
import Backdrop from './../Backdrop/Backdrop';

class Modal extends Component {
    render(){
        return(
            <div>
                <Backdrop show={this.props.show} clicked={this.props.close}/>
                <div className= {this.props.show ? "Modal" : ""}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;