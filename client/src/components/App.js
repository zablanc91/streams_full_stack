import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div>
                <p>Tester</p>
                <Header />
            </div>
        );

    }  
};

//no mapStateToProps used in this component
export default connect(null, actions)(App);