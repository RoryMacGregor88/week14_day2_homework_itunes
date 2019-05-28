import React, { Component } from 'react';
import Song from "./Song";

class SongList extends Component {

    render() { 
        const songs = this.props.top20.map((song, index) => {
            return (
                <Song entry={song} index={index + 1}  />
            )
        });
        return ( 
            [songs]
         );
    }
}
 
export default SongList;