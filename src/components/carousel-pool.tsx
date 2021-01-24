import React from 'react';
import ImageGallery from 'react-image-gallery';
import p1 from '../images/p1.svg';
import p2 from '../images/p2.svg';
import p3 from '../images/p3.svg';

import 'react-image-gallery/styles/css/image-gallery.css';

const pool = [
  {
    original: p1,
    thumbnail: p1,
  },
  {
    original: p2,
    thumbnail: p2,
  },
  {
    original: p3,
    thumbnail: p3,
  },
];

export default class CarouselPool extends React.Component {
  render() {
    return (
      <ImageGallery
        items={pool}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    );
  }
}
