import React, { Component } from 'react';
import SongList from "../components/SongList";

class ChartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chart: []
         }
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        const request = new XMLHttpRequest();
        request.open('GET', url);

        request.addEventListener("load", () => {
            if (request.status !== 200) return;
            const jsonString = request.responseText;
            const data = JSON.parse(jsonString);
            this.setState({ chart: data.feed.entry })
        });
         request.send();
    }

    render() { 
        return ( 
            <div>
                <h1>Top 20 iTunes Chart</h1>
                <SongList top20={this.state.chart} />
            </div>
         );
    }


}
 
export default ChartContainer;