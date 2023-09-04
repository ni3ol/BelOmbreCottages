import React from 'react';
import { Header } from 'semantic-ui-react';
import Layout from '../components/layout';
import { MediaContextProvider, Media } from '../media';
import styles from './index.module.css';
import CarouselPool from '../components/carousel-pool';
import CarouselGarden from '../components/carousel-garden';
import CarouselProperty from '../components/carousel-property';

const Gallery = () => (
  <MediaContextProvider>
    <Layout>
      <Media greaterThanOrEqual="tablet">
        <div style={{ width: '80%', margin: 'auto', marginTop: 50 }}>
          <CarouselPool />
        </div>
      </Media>
      <Media at="mobile">
        <div style={{ width: '80%', margin: 'auto' }}>
          <CarouselPool />
        </div>
      </Media>
    </Layout>
  </MediaContextProvider>
);

export default Gallery;
