import React from 'react';
import { Header, List, Grid, Icon } from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import CarouselCottageOne from '../components/carousel-cottage-one';
import CarouselCottageTwo from '../components/carousel-cottage-two';
import Layout from '../components/layout';
import { MediaContextProvider, Media } from '../media';
import Facilities from '../images/facilities.svg';
import styles from './accommodation.module.css';

const cottageOne = [
  'One bedroom with twin or king size bed/s',
  'Cotton percale linen',
  'En-suite bathroom with shower',
  'Open plan living space',
  'Fully equipped kitchenette with granite tops',
  'Private patio with braai/barbeque facilities. Webers available',
  'Access to pool',
];

const cottageTwo = [
  'Two bedrooms with queen size and 2 twin beds',
  'Bedrooms with patios overlooking the garden',
  'Full bathroom',
  'Cotton percale linen',
  'Spacious open plan living space',
  'Fully equipped kitchennette with granite tops',
  'Private patio with braai/barbeque facilities. Webers available',
  'Access to pool',
];

const facilities = [
  'DSTV',
  'WIFI',
  'Hair dryer',
  'Pool towels included',
  'Laundry service available',
  'Secure onsite parking',
  'Smoking outside only',
  '24 hour security patrolling',
  'Alarm system and safe',
  'Not accessible for wheelchairs',
  'Cellars Hohenort and Alphen Hotels in walking distance from us',
];

const Cottages = () => (
  <MediaContextProvider>
    <Layout>
      <Media greaterThanOrEqual="tablet">
        <Header className={styles.header}>
          Accommodation
          <HeaderSubHeader
            style={{
              fontFamily: 'Avenir, Tahoma, Arial, Helvetica, sans-serif',
              fontSize: 22,
            }}
          >
            Guests are accommodated in relaxing, tastefully decorated cottages
          </HeaderSubHeader>
        </Header>
        <div className={styles.cottage}>
          <Grid columns={2}>
            <Grid.Column>
              <Header className={styles.cottageHeader}>Cottage 1</Header>
              <List size="large" verticalAlign="middle">
                {cottageOne.map((item) => (
                  <List.Item style={{ paddingBottom: 10, display: 'flex' }}>
                    <Icon
                      name="check"
                      color="green"
                      style={{ paddingRight: 30 }}
                    />
                    {item}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column>
              <CarouselCottageOne />
            </Grid.Column>
          </Grid>
        </div>
        <div className={styles.cottage}>
          <Grid columns={2}>
            <Grid.Column>
              <CarouselCottageTwo />
            </Grid.Column>
            <Grid.Column>
              <Header className={styles.cottageHeader}>Cottage 2</Header>
              <List size="large" verticalAlign="middle">
                {cottageTwo.map((item) => (
                  <List.Item style={{ paddingBottom: 10, display: 'flex' }}>
                    <Icon
                      name="check"
                      color="green"
                      style={{ paddingRight: 30 }}
                    />
                    {item}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
          </Grid>
        </div>
        <div className={styles.cottage}>
          <Grid columns={2}>
            <Grid.Column>
              <Header className={styles.cottageHeader}>Facilities</Header>
              <List size="large" verticalAlign="middle">
                {facilities.map((item) => (
                  <List.Item style={{ paddingBottom: 10, display: 'flex' }}>
                    <Icon
                      name="check"
                      color="green"
                      style={{ paddingRight: 30 }}
                    />
                    {item}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column>
              <img src={Facilities} />
            </Grid.Column>
          </Grid>
        </div>
      </Media>
      <Media at="mobile">
        <Header className={styles.header}>
          Cottages
          <HeaderSubHeader
            style={{
              fontFamily: 'Avenir, Tahoma, Arial, Helvetica, sans-serif',
              fontSize: 22,
            }}
          >
            Guests are accommodated in relaxing, tastefully decorated cottages
          </HeaderSubHeader>
        </Header>
        <Header className={styles.cottageHeader}>Cottage 1</Header>
        <List size="large" verticalAlign="middle">
          {cottageOne.map((item) => (
            <List.Item style={{ paddingBottom: 10, display: 'flex' }}>
              <Icon name="check" color="green" style={{ paddingRight: 30 }} />
              {item}
            </List.Item>
          ))}
        </List>
        <CarouselCottageOne />
        <Header className={styles.cottageHeader}>Cottage 2</Header>
        <List size="large" verticalAlign="middle">
          {cottageTwo.map((item) => (
            <List.Item style={{ paddingBottom: 10, display: 'flex' }}>
              <Icon name="check" color="green" style={{ paddingRight: 30 }} />
              {item}
            </List.Item>
          ))}
        </List>
        <CarouselCottageTwo />
        <Header className={styles.cottageHeader}>Facilities</Header>
        <List size="large" verticalAlign="middle">
          {facilities.map((item) => (
            <List.Item style={{ paddingBottom: 10, display: 'flex' }}>
              <Icon name="check" color="green" style={{ paddingRight: 30 }} />
              {item}
            </List.Item>
          ))}
        </List>
        <img src={Facilities} />
      </Media>
    </Layout>
  </MediaContextProvider>
);

export default Cottages;
