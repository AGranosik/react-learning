import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    console.log(props);
    const song = props.song;
    if(!song){
        return <div>Select a song</div>;
    }
    return(
        <div>
            <h3>Details for :</h3>
            <p>Title : {song.title}
            <br/>
            Duration : {song.duration}
            </p>
        </div>
    );
};

// state - what reducer returns, in this case - songs
const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);