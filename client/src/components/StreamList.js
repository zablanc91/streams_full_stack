import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStreams } from '../actions';
import StreamCard from './StreamCard';

class StreamList extends Component {
    componentDidMount(){
        this.props.getStreams();
    }

    //reminder that default stream state is empty object, so okay on first render when doing API call
    renderStreams(){    
        return(
            <div className="row">
                {this.props.streams.map(stream => {
                    return(
                        <StreamCard id={stream._id} name={stream.name} description={stream.description} />
                    );
                })}

            </div>
        ) ;
    }

    render(){
        return (
            <div className="container" >
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