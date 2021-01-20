import React from 'react';
import ImageGallery from 'react-image-gallery';
import g1 from '../images/g1.png';
import g2 from '../images/g2.png';
import g3 from '../images/g3.png';
import g4 from '../images/g4.png';

import 'react-image-gallery/styles/css/image-gallery.css';

const garden = [
  {
    original: g1,
    thumbnail: g1,
  },
  {
    original: g2,
    thumbnail: g2,
  },
  {
    original: g3,
    thumbnail: g3,
  },
  {
    original: g4,
    thumbnail: g4,
  },
];

export default class CarouselPool extends React.Component {
  render() {
    return (
      <ImageGallery
        items={garden}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    );
  }
}
