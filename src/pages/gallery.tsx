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
        <Header className={styles.header}>Pool area</Header>
        <div style={{ width: '80%', margin: 'auto' }}>
          <CarouselPool />
        </div>
        <Header className={styles.header}>Garden</Header>
        <div style={{ width: '80%', margin: 'auto' }}>
          <CarouselGarden />
        </div>
        <Header className={styles.header}>Property</Header>
        <div style={{ width: '80%', margin: 'auto' }}>
          <CarouselProperty />
        </div>
      </Media>
      <Media at="mobile">
        <Header className={styles.subheader}>Pool area</Header>
        <div style={{ width: '80%', margin: 'auto' }}>
          <CarouselPool />
        </div>
        <Header className={styles.subheader}>Garden</Header>
        <div style={{ width: '80%', margin: 'auto' }}>
          <CarouselGarden />
        </div>
        <Header className={styles.subheader}>Property</Header>
        <div style={{ width: '80%', margin: 'auto' }}>
          <CarouselProperty />
        </div>
      </Media>
    </Layout>
  </MediaContextProvider>
);

export default Gallery;
