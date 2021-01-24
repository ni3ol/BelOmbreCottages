/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { init } from 'emailjs-com';
import Navigation from '../components/navigation';
import { Media, MediaContextProvider } from '../media';
import styles from './index.module.css';
import { SEO } from '../components/seo';
import Hero from '../images/hero.svg';
import Hero1 from '../images/hero1.svg';
import Hero2 from '../images/hero2.svg';

init('user_I9XUzzlLBgjlABVvSh0m2');

const RootIndex = () => {
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-calendar-react@latest/dist/umd/semantic-ui-calendar-react.js" />
      <MediaContextProvider>
        <Container>
          <Navigation />
        </Container>
        <Media greaterThanOrEqual="tablet">
          <img src={Hero} className={styles.heroImg} />
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
                  <img src={Hero1} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className={styles.body}>
                <Grid.Column>
                  <img src={Hero2} />
                </Grid.Column>
                <Grid.Column style={{ paddingLeft: 30 }}>
                  <p>
                    Over the years we have established an excellent reputation
                    with our guests local and oversees, returning year after
                    year.
                  </p>
                  <p>
                    Easy access onto the M3 highway, 20 minutes from Cape Town
                    City Center, V&A Waterfront and airport. Close to fine
                    restaurants, wine farms and golf courses.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Media>
        <Media at="mobile">
          <img src={Hero} />
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
            <img src={Hero1} />
            <p>
              Over the years we have established an excellent reputation with
              our guests local and oversees, returning year after year.
            </p>
            <p>
              Easy access onto the M3 highway, 20 minutes from Cape Town City
              Center, V&A Waterfront and airport. Close to fine restaurants,
              wine farms and golf courses.
            </p>
            <img src={Hero2} />
          </div>
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default RootIndex;
