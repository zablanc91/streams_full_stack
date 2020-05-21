import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as actions from '../actions';

const StreamCreate = () => <h3>Create a new stream (coming soon)</h3>;
const componentNotFound = () => <h3>404. Not Found</h3>;
const StreamList = () => <h3>Stream List (coming soon)</h3>;

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/"  component={StreamList} />
                        <Route exact path="/streams/new" component={StreamCreate} /> 
                        <Route path="*" component={componentNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        );

    }  
};

//no mapStateToProps used in this component
export default connect(null, actions)(App);