import React from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div key={song.title} className="item">
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs};
}

// selected song - in this case is mapped to a prop field, and called
// whenever button is clicked and invoke an action
export default connect(mapStateToProps, { selectSong })(SongList);