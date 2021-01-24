import React from 'react';
import ImageGallery from 'react-image-gallery';
import p1 from '../images/b1.svg';
import p2 from '../images/b2.svg';
import p3 from '../images/b3.svg';
import p4 from '../images/b4.svg';
import p5 from '../images/b5.svg';
import p6 from '../images/b6.svg';

import 'react-image-gallery/styles/css/image-gallery.css';

const property = [
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
  {
    original: p4,
    thumbnail: p4,
  },
  {
    original: p5,
    thumbnail: p5,
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
