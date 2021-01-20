import React from 'react';
import ImageGallery from 'react-image-gallery';
import c1 from '../images/c21.png';
import c2 from '../images/c22.png';
import c3 from '../images/c23.png';
import c4 from '../images/c24.png';
import c5 from '../images/c25.png';
import c6 from '../images/c26.png';
import c7 from '../images/c27.png';
import c8 from '../images/c28.png';
import c9 from '../images/c29.png';
import c10 from '../images/c210.png';

import 'react-image-gallery/styles/css/image-gallery.css';

const cottageTwo = [
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
  {
    original: c8,
    thumbnail: c8,
  },
  {
    original: c9,
    thumbnail: c9,
  },
  {
    original: c10,
    thumbnail: c10,
  },
];

export default class CarouselCottageTwo extends React.Component {
  render() {
    return (
      <ImageGallery
        items={cottageTwo}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    );
  }
}
