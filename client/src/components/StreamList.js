import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStreams } from '../actions'

class StreamList extends Component {
    componentDidMount(){
        this.props.getStreams();
    }

    //reminder that default stream state is empty object, so okay on first render when doing API call
    renderStreams(){     
        return this.props.streams.map(stream => {
            return(
                <div key={stream._id}>
                    <h3>{stream.name}</h3>
                    <p>{stream.description}</p>
                </div>
            );
        })
    }

    render(){
        return (
            <div>
                {this.renderStreams()}
            </div>
        );
    }
};

//state for stream reducer is an object (keys - stream id, values - stream info), will turn to an array
const mapStateToProps = ({stream}) => {
    return {
        streams: Object.values(stream)
    };
}

export default connect(mapStateToProps, {getStreams})(StreamList);