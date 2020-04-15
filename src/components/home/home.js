import React from 'react';
import { Component } from 'react';

import Modal from './../UI/Modal/Modal';
import Auth from './../auth/auth';

import './home.css';

class Home extends Component{
    state={
        signpage:false
    }

    signpageopen = () =>{
        console.log('hii')
        this.setState({signpage: true})
    }
 
    signpageclose = () =>{
        this.setState({signpage: false})
    }

    render(){
        let auth= null;
        if(this.state.signpage){
            auth= <Auth/>
        }
        return(
            <div className="home">
                <Modal show={this.state.signpage} close={this.signpageclose}>
                    {auth}
                </Modal>
                <button onClick={this.signpageopen} className={this.state.signpage ? "disappear" : "hvr-buzz"}>SignIn/SignUp</button>
            </div>
        )
    }
}

export default Home;