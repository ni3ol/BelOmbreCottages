import React from 'react';
import ImageGallery from 'react-image-gallery';
import c1 from '../images/c1.svg';
import c2 from '../images/c2.svg';
import c3 from '../images/c3.svg';
import c4 from '../images/c4.svg';
import c5 from '../images/c5.svg';
import c6 from '../images/c6.svg';
import c7 from '../images/c7.svg';

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
