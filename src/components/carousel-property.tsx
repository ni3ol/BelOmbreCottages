import React from 'react';
import ImageGallery from 'react-image-gallery';
import entrance from '../images/property/entrance.jpg';
import p1 from '../images/b1.svg';
import p2 from '../images/b2.svg';
import p6 from '../images/b6.svg';

import 'react-image-gallery/styles/css/image-gallery.css';

const property = [
  {
    original: entrance,
    thumbnail: entrance,
  },
  {
    original: p1,
    thumbnail: p1,
  },
  {
    original: p2,
    thumbnail: p2,
  },
  {
    original: p6,
    thumbnail: p6,
  },
];

export default class CarouselProperty extends React.Component {
  render() {
    return (
      <ImageGallery
        items={property}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    );
  }
}
