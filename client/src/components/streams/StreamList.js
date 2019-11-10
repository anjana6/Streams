import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderAdimin(stream){
        return(
            <div className="right floated content">
                <Link className="ui button primary" to={`/Streams/edit/${stream.id}`}>Edit</Link>
                <button className="ui button negative">Delete</button>
            </div>
        );

    }

    renderList(){
        return this.props.streams.map(stream =>{
            return(
                <div className="item" key={stream.id}>
                    {this.renderAdimin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                        
                    </div>
                </div>
            )
        })
    }

    renderCreate(){
        return(
            <div style={{textAlign: 'right'}}>
                <Link to="/streams/new" className="ui button primary">
                    Create Strea m
                </Link>
            </div>
        )
    }

    render(){
        // console.log(this.props.streams)
        return(
            <div>
                <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
            </div>
        );
    } 
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams)};
};

export default connect(mapStateToProps,{fetchStreams})(StreamList);