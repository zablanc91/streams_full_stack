import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    //helper to change header display depending if user is logged in
    const renderNavContent = () => {
        switch(props.auth){
            case null:
                return;

            case false:
                return(
                    <li className="nav-item">
                            <a className="nav-link" href="/auth/google">Log In</a>
                     </li>
                );

            default:
                return(
                    <>
                        <li className="nav-item">
                                <a className="nav-link" href="/streams/new">Add Stream</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="/api/logout">Log Out</a>
                        </li>
                    </>
                );
        }
    }

    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="/">Streams</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {renderNavContent()}
                    </ul>
                </div>
            </nav>

        </div>
    );
};

//brings in state, deconstruct to just get auth reducer and add to props
const mapStateToProps = ({auth}) => {
    return {auth};
}

export default connect(mapStateToProps)(Header);