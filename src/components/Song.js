import React from 'react';

const Song = (props) => {
    return (
        <div>
            <p>In at number {props.index}:</p>
            <h2>Title: {props.entry["im:name"].label} ({props.entry.category.attributes.term}) </h2>
            <h3>Artist: {props.entry["im:artist"].label}</h3>
            <img alt="" src={props.entry["im:image"][2].label}/>
        </div>
    )
}

export default Song;