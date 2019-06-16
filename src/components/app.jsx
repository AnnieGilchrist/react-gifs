import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = "XS7rZT36CssaTUzTfbLVseYc53V0VTsP";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "R9Sq5b15MdyA8"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (error, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (selector) => {
    this.setState({
      selectedGifId: selector
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList selectGif={this.selectGif} gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
