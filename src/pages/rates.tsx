import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Layout from '../components/layout';
import { MediaContextProvider, Media } from '../media';
import Main from '../images/rates-flower.png';
import Hero1 from '../images/rates.png';
import styles from './rates.module.css';

const Rates = () => (
  <MediaContextProvider>
    <Layout>
      <Media greaterThanOrEqual="tablet">
        <Header className={styles.header}>Rates</Header>

        <Grid columns={2}>
          <Grid.Row className={styles.body}>
            <Grid.Column>
              <p>
                From 
{' '}
<strong>R725/pp per night sharing</strong>, negotiable
                depending on sharing
              </p>
              <p>
                Single rates on request We require a 50% deposit to secure the
                booking
              </p>
              <p>No credit card facilities available</p>
            </Grid.Column>
            <Grid.Column>
              <img src={Main} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>
      <Media at="mobile">
        <img src={Hero1} style={{ marginBottom: 20 }} />
        <p style={{ textAlign: 'center' }}>
          From <strong>R725/pp per night sharing</strong>
          , negotiable depending on sharing
          <br />
          Single rates on request We require a 50% deposit to secure the booking
          <br />
          No credit card facilities available
        </p>
        <img src={Main} />
      </Media>
    </Layout>
  </MediaContextProvider>
);

export default Rates;
