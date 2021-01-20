/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { init } from 'emailjs-com';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navigation from '../components/navigation';
import { Media, MediaContextProvider } from '../media';
import styles from './index.module.css';
import { SEO } from '../components/seo';

init('user_I9XUzzlLBgjlABVvSh0m2');

const RootIndex = (props: any) => {
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-calendar-react@latest/dist/umd/semantic-ui-calendar-react.js" />
      <MediaContextProvider>
        <Container>
          <Navigation />
        </Container>
        <Media greaterThanOrEqual="tablet">
          <Img
            style={{ width: '100%', marginBottom: 50 }}
            fluid={props.data.hero.childImageSharp.fluid}
          />
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
                  <Img
                    style={{ width: '100%' }}
                    fluid={props.data.body1.childImageSharp.fluid}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className={styles.body}>
                <Grid.Column>
                  <Img
                    style={{ width: '100%' }}
                    fluid={props.data.body2.childImageSharp.fluid}
                  />
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
          <Img
            style={{ width: '100%', marginBottom: 50 }}
            fluid={props.data.hero.childImageSharp.fluid}
          />
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
            <Img
              style={{ width: '100%' }}
              fluid={props.data.body1.childImageSharp.fluid}
            />
            <p>
              Over the years we have established an excellent reputation with
              our guests local and oversees, returning year after year.
            </p>
            <p>
              Easy access onto the M3 highway, 20 minutes from Cape Town City
              Center, V&A Waterfront and airport. Close to fine restaurants,
              wine farms and golf courses.
            </p>
            <Img
              style={{ width: '100%' }}
              fluid={props.data.body2.childImageSharp.fluid}
            />
          </div>
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default RootIndex;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "heroover.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    body1: file(relativePath: { eq: "index-body1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    body2: file(relativePath: { eq: "index-body2.png" }) {
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
