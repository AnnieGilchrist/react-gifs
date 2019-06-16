import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const renderList = () => {
    return props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />);
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};

export default GifList;
