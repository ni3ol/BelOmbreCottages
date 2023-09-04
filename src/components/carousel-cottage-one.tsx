import React from 'react';
import ImageGallery from 'react-image-gallery';
import c1 from '../images/c1.svg';
import c2 from '../images/c2.svg';
import bedroom from '../images/cottage1/bedroom.jpg';
import kitchen from '../images/cottage1/kitchen.jpg';
import lounge from '../images/cottage1/lounge.jpg';
import lounge2 from '../images/cottage1/lounge2.jpg';
import lawn from '../images/cottage1/cot1lawn.jpg';
import bath from '../images/cottage1/cot1bath.jpg';
import tv from '../images/cottage1/cot1tv.jpg';

import 'react-image-gallery/styles/css/image-gallery.css';

const cottageOne = [
  {
    original: c1,
    thumbnail: c1,
  },
  {
    original: lawn,
    thumbnail: lawn,
  },
  {
    original: bedroom,
    thumbnail: bedroom,
  },
  {
    original: bath,
    thumbnail: bath,
  },
  {
    original: kitchen,
    thumbnail: kitchen,
  },
  {
    original: tv,
    thumbnail: tv,
  },
  {
    original: lounge,
    thumbnail: lounge,
  },
  {
    original: lounge2,
    thumbnail: lounge2,
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
