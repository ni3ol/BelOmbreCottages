/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';
import Navigation from '../components/navigation';
import { Media, MediaContextProvider } from '../media';
import styles from './index.module.css';
import { SEO } from '../components/seo';
import Home1 from '../images/home1.jpg';
import Home2 from '../images/home2.jpg';
import Home3 from '../images/home3.jpg';
import Home4 from '../images/home4.jpg';

const RootIndex = () => {
  return (
    <>
      <SEO />
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-calendar-react@latest/dist/umd/semantic-ui-calendar-react.js" />
      <MediaContextProvider>
        <Container>
          <Navigation />
        </Container>
        <Media greaterThanOrEqual="tablet">
          {/* <img src={Hero} className={styles.heroImg} /> */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '50px',
            }}
          >
            <img src={Home2} />
            <img src={Home1} />
          </div>
          <Header className={styles.header}>Bel Ombre Cottages</Header>
          <Container>
            <Grid columns={2}>
              <Grid.Row className={styles.body}>
                <Grid.Column>
                  <p>
                    Nestled in the upmarket leafy suburb of Constantia, renowned
                    for its historical wine farms.
                  </p>

                  <p>
                    Bel Ombre Cottages offers the perfect balance between rural
                    serenity and urban conveniences. It’s ideal location allows
                    you to easily explore Cape Town and then retire to the
                    peaceful comfort of the well appointed cottages.
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <img src={Home3} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className={styles.body}>
                <Grid.Column>
                  <img src={Home4} />
                </Grid.Column>
                <Grid.Column style={{ paddingLeft: 30 }}>
                  <p>
                    Over the years we have established an excellent reputation
                    with our local and overseas guests returning year after
                    year.
                  </p>
                  <p>
                    Easy access onto the M3 highway, 20 minutes from Cape Town
                    City Center, V&A Waterfront and airport. Close to fine
                    restaurants, wine farms and golf courses. The Bel Ombre
                    Meadow and Alphen Walk are in close proximity for walking.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Media>
        <Media at="mobile">
          <img src={Home1} />
          <Header className={styles.mobileHeader}>Bel Ombre Cottages</Header>

          <div
            style={{ paddingLeft: 20, paddingRight: 20, textAlign: 'center' }}
          >
            <p>
              Nestled in the upmarket leafy suburb of Constantia, renowned for
              its historical wine farms.
            </p>
            <p>
              Bel Ombre Cottages offers the perfect balance between rural
              serenity and urban conveniences. It’s ideal location allows you to
              easily explore Cape Town and then retire to the peaceful comfort
              of the well appointed cottages.
            </p>
            <img src={Home2} />
            <p>
              Over the years we have established an excellent reputation with
              our local and overseas guests returning year after year.
            </p>
            <p>
              Easy access onto the M3 highway, 20 minutes from Cape Town City
              Center, V&A Waterfront and airport. Close to fine restaurants,
              wine farms and golf courses. The Bel Ombre Meadow and Alphen Walk
              are in close proximity for walking.
            </p>
            <img src={Home3} />
          </div>
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default RootIndex;
