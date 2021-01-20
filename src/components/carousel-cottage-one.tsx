import React from 'react';
import ImageGallery from 'react-image-gallery';
import c1 from '../images/c11.png';
import c2 from '../images/c12.png';
import c3 from '../images/c13.png';
import c4 from '../images/c14.png';
import c5 from '../images/c15.png';
import c6 from '../images/c16.png';
import c7 from '../images/c17.png';

import 'react-image-gallery/styles/css/image-gallery.css';

const cottageOne = [
  {
    original: c1,
    thumbnail: c1,
  },
  {
    original: c2,
    thumbnail: c2,
  },
  {
    original: c3,
    thumbnail: c3,
  },
  {
    original: c4,
    thumbnail: c4,
  },
  {
    original: c5,
    thumbnail: c5,
  },
  {
    original: c6,
    thumbnail: c6,
  },
  {
    original: c7,
    thumbnail: c7,
  },
];

export default class CarouselCottageOne extends React.Component {
  render() {
    return (
      <ImageGallery
        items={cottageOne}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    );
  }
}
