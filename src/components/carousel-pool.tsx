import React from 'react';
import ImageGallery from 'react-image-gallery';
import p1 from '../images/property/pool1.jpg';
import p2 from '../images/property/pool2.jpg';
import p3 from '../images/property/pool3.jpg';
import p4 from '../images/property/pool4.jpg';
import g1 from '../images/g1.svg';
import g3 from '../images/g3.svg';
import entrance from '../images/property/entrance.jpg';
import car1 from '../images/property/car1.jpg';
import car2 from '../images/property/car2.jpg';
import car3 from '../images/property/car3.jpg';
import car4 from '../images/property/car4.jpg';
import car5 from '../images/property/car5.jpg';
import car6 from '../images/property/car6.jpg';

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
  {
    original: p4,
    thumbnail: p4,
  },
  {
    original: g1,
    thumbnail: g1,
  },
  {
    original: g3,
    thumbnail: g3,
  },
  {
    original: entrance,
    thumbnail: entrance,
  },
  {
    original: car1,
    thumbnail: car1,
  },
  {
    original: car2,
    thumbnail: car2,
  },
  {
    original: car3,
    thumbnail: car3,
  },
  {
    original: car4,
    thumbnail: car4,
  },
  {
    original: car5,
    thumbnail: car5,
  },
  {
    original: car6,
    thumbnail: car6,
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
