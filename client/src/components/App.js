import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { fetchUser } from '../actions';
import StreamCreate from './StreamCreate';
import StreamList from './StreamList';
import StreamShow from './StreamShow';

const componentNotFound = () => <h3>404. Not Found</h3>;


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
                        {this.props.auth ? (
                                <Route exact path="/streams/new" component={StreamCreate} /> 
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                        <Route exact path="/streams/:id" component={StreamShow} /> 
                        <Route path="*" component={componentNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        );

    }  
};

const mapStateToProps = ({auth}) => {
    return {auth};
}
export default connect(mapStateToProps, {fetchUser})(App);