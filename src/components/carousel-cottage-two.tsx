import React from 'react';
import ImageGallery from 'react-image-gallery';
import d1 from '../images/d1.svg';
import d2 from '../images/d2.svg';
import d3 from '../images/d3.svg';
import d4 from '../images/d4.svg';
import d5 from '../images/d5.svg';
import d6 from '../images/d6.svg';
import d8 from '../images/d8.svg';
import d9 from '../images/d9.svg';
import d10 from '../images/d10.svg';
import d11 from '../images/d11.svg';
import d12 from '../images/d12.svg';

import 'react-image-gallery/styles/css/image-gallery.css';

const cottageTwo = [
  {
    original: d1,
    thumbnail: d1,
  },
  {
    original: d2,
    thumbnail: d2,
  },
  {
    original: d3,
    thumbnail: d3,
  },
  {
    original: d4,
    thumbnail: d4,
  },
  {
    original: d5,
    thumbnail: d5,
  },
  {
    original: d6,
    thumbnail: d6,
  },
  {
    original: d12,
    thumbnail: d12,
  },
  {
    original: d8,
    thumbnail: d8,
  },
  {
    original: d9,
    thumbnail: d9,
  },
  {
    original: d10,
    thumbnail: d10,
  },
  {
    original: d11,
    thumbnail: d11,
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
