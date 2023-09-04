import React from 'react';
import ImageGallery from 'react-image-gallery';
import bed1 from '../images/cottage2/bed1.jpg';
import bed2 from '../images/cottage2/bed2.jpg';
import kitchen from '../images/cottage2/kitchen.jpg';
import lounge from '../images/cottage2/lounge.jpg';
import lounge2 from '../images/cottage2/lounge2.jpg';
import bath from '../images/cottage2/bath.jpg';
import stairs from '../images/cottage2/stairs.jpg';
import exterior from '../images/cottage2/exterior.jpg';
import patio from '../images/cottage2/cot2balcony.jpg';

import 'react-image-gallery/styles/css/image-gallery.css';

const cottageTwo = [
  {
    original: exterior,
    thumbnail: exterior,
  },
  {
    original: bed1,
    thumbnail: bed1,
  },
  {
    original: bed2,
    thumbnail: bed2,
  },
  {
    original: kitchen,
    thumbnail: kitchen,
  },
  {
    original: lounge,
    thumbnail: lounge,
  },
  {
    original: lounge2,
    thumbnail: lounge2,
  },
  {
    original: bath,
    thumbnail: bath,
  },
  {
    original: stairs,
    thumbnail: stairs,
  },
  {
    original: patio,
    thumbnail: patio,
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
