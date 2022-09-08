/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Grid, Header, Container, Button } from 'semantic-ui-react';
import Layout from '../components/layout';
import { Media, MediaContextProvider } from '../media';
import Flower from '../images/contact-flower.svg';

const Rates = () => {
  return (
    <MediaContextProvider>
      <Layout>
        <Media greaterThanOrEqual="tablet">
          <Container style={{ marginTop: 80 }}>
            <Grid columns={2} centered>
              <Grid.Column
                width={8}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <img src={Flower} />
              </Grid.Column>

              <Grid.Column>
                <Header
                  as="h1"
                  style={{
                    fontFamily: 'Tangerine',
                    fontSize: 60,
                    fontWeight: 100,
                  }}
                >
                  Contact details
                </Header>
                <p>
                  <strong>Anita Gildenhuys</strong>
                </p>
                <p>
                  <strong>Email:</strong> belombre@mweb.co.za
                </p>
                <p>
                  <strong>Cell:</strong> +27 83 794 3461
                </p>
                <p>
                  <strong>Website:</strong> www.belombrecottages.co.za
                </p>
              </Grid.Column>
            </Grid>
            <Header
              as="h2"
              style={{
                fontFamily: 'Tangerine',
                fontWeight: 100,
                fontSize: 80,
                textAlign: 'center',
                marginTop: 100,
              }}
            >
              Map and directions
            </Header>
            <Grid columns={2}>
              <Grid.Column>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.233913593128!2d18.42767641575269!3d-34.012206233948476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4282dad7d2b1%3A0x1f82efa53362e046!2s99%20Rathfelder%20Ave%2C%20Bel%20Ombre%2C%20Cape%20Town%2C%207806!5e0!3m2!1sen!2sza!4v1610822266831!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  tabIndex={0}
                />
              </Grid.Column>
              <Grid.Column style={{ paddingLeft: '10%' }}>
                <p>
                  99 Rathfelder Avenue
                  <br />
                  Constantia
                  <br />
                  Cape Town
                  <br />
                  7806
                </p>
                <a target="_blank" href="/directions">
                  <Button primary>Open printable directions</Button>
                </a>
              </Grid.Column>
            </Grid>
          </Container>
        </Media>
        <Media at="mobile">
          <Container style={{ marginBottom: 80, marginTop: 80 }}>
            <img src={Flower} />
            <Header
              as="h1"
              style={{
                fontFamily: 'Tangerine',
                fontSize: 60,
                fontWeight: 100,
              }}
            >
              Contact details
            </Header>
            <p>
              <strong>Anita Gildenhuys</strong>
            </p>
            <p>
              <strong>Email:</strong> belombre@mweb.co.za
            </p>
            <p>
              <strong>Cell:</strong> +27 83 794 3461
            </p>
            <p>
              <strong>Website:</strong> www.belombrecottages.co.za
            </p>

            <Header
              as="h2"
              style={{
                fontFamily: 'Tangerine',
                fontWeight: 100,
                fontSize: 50,
                textAlign: 'center',
                marginTop: 50,
              }}
            >
              Map and directions
            </Header>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.233913593128!2d18.42767641575269!3d-34.012206233948476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4282dad7d2b1%3A0x1f82efa53362e046!2s99%20Rathfelder%20Ave%2C%20Bel%20Ombre%2C%20Cape%20Town%2C%207806!5e0!3m2!1sen!2sza!4v1610822266831!5m2!1sen!2sza"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex={0}
            />

            <p>
              99 Rathfelder Avenue
              <br />
              Constantia
              <br />
              Cape Town
              <br />
              7806
            </p>
            <a style={{ paddingBottom: 20 }} target="_blank" href="/directions">
              <Button primary>Open printable directions</Button>
            </a>
          </Container>
        </Media>
      </Layout>
    </MediaContextProvider>
  );
};

export default Rates;
