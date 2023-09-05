import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Layout from '../components/layout';
import { MediaContextProvider, Media } from '../media';
import styles from './rates.module.css';
import Flower from '../images/rates-flower.svg';

const Rates = () => (
  <MediaContextProvider>
    <Layout>
      <Media greaterThan="tablet">
        <Header className={styles.header}>Rates</Header>

        <Grid columns={2}>
          <Grid.Row className={styles.body}>
            <Grid.Column>
              <p>
                From <strong>R750 per person per night</strong>, depending on
                persons sharing per night.
              </p>
              <p>Single rates on request.</p>
              <p>A 50% deposit is required to secure the booking.</p>
              <p>No credit card facilities available.</p>
            </Grid.Column>
            <Grid.Column>
              <img src={Flower} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>
      <Media at="tablet">
        <Header className={styles.header}>Rates</Header>

        <Grid columns={2}>
          <Grid.Row className={styles.body}>
            <Grid.Column>
              <p>
                From <strong>R750/pp per night sharing</strong>, depending on
                sharing.
              </p>
              <p>Single rates on request.</p>
              <p> A 50% deposit is required to secure the booking.</p>
              <p>No credit card facilities available.</p>
            </Grid.Column>
            <Grid.Column>
              <img src={Flower} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>
      <Media at="mobile">
        <Header className={styles.header}>Rates</Header>
        <p style={{ textAlign: 'center' }}>
          From <strong>R750/pp per night sharing</strong>
          , depending on sharing.
          <br />
          Single rates on request.
          <br />
          A 50% deposit is required to secure the booking.
          <br />
          No credit card facilities available.
        </p>
        <img src={Flower} />
      </Media>
    </Layout>
  </MediaContextProvider>
);

export default Rates;
