import React from 'react';
import ImageGallery from 'react-image-gallery';
import p1 from '../images/h1.png';
import p2 from '../images/h2.png';
import p3 from '../images/h3.png';
import p4 from '../images/h4.png';
import p5 from '../images/h5.png';
import p6 from '../images/h6.png';

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
