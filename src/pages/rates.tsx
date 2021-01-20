import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Grid, Header } from 'semantic-ui-react';
import Layout from '../components/layout';
import { MediaContextProvider, Media } from '../media';
import styles from './rates.module.css';

const Rates = ({ data }) => (
  <MediaContextProvider>
    <Layout>
      <Media greaterThan="tablet">
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
              <Img
                style={{ width: '100%' }}
                fluid={data.flower.childImageSharp.fluid}
              />
{' '}
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
              <Img
                style={{ width: '100%' }}
                fluid={data.flower.childImageSharp.fluid}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>
      <Media at="mobile">
        <Header className={styles.header}>Rates</Header>
        <p style={{ textAlign: 'center' }}>
          From 
{' '}
<strong>R725/pp per night sharing</strong>
          , negotiable depending on sharing
          <br />
          Single rates on request We require a 50% deposit to secure the booking
          <br />
          No credit card facilities available
        </p>
        <Img
          style={{ width: '100%' }}
          fluid={data.flower.childImageSharp.fluid}
        />
      </Media>
    </Layout>
  </MediaContextProvider>
);

export default Rates;

export const query = graphql`
  query {
    flower: file(relativePath: { eq: "rates-flower.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
