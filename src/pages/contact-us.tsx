/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Grid,
  Header,
  Segment,
  Message,
  Container,
  Button,
  Form,
  TextArea,
  Input,
} from 'semantic-ui-react';
import { send } from 'emailjs-com';
import { DateInput } from 'semantic-ui-calendar-react';
import Layout from '../components/layout';
import { Media, MediaContextProvider } from '../media';
import { getEmailError, getInputError } from '../helpers/form-validation';

const Rates = ({ data }: { data: any }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [contact, setContact] = useState<string | undefined>(undefined);
  const [arrival, setArrival] = useState<string | undefined>(undefined);
  const [departure, setDeparture] = useState<string | undefined>(undefined);
  const [adults, setAdults] = useState<string | undefined>(undefined);
  const [children, setChildren] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const handleArrivalChange = (
    event: any,
    { name, value }: { name: any; value: any },
  ) => setArrival(value);

  const handleDepartureChange = (
    event: any,
    { name, value }: { name: any; value: any },
  ) => setDeparture(value);

  const submit = async () => {
    setHasBeenSubmitted(true);

    const canSubmit = name && email && message;

    if (canSubmit) {
      try {
        setIsLoading(true);
        await send('service_cygh46b', 'template_jsolrkh', {
          name,
          email,
          contact,
          arrival,
          departure,
          adults,
          children,
          message,
        });
        setIsLoading(false);
        setShowSuccess(true);
      } catch (e) {
        setIsLoading(false);
        setHasError(true);
      }
    }
  };
  return (
    <MediaContextProvider>
      <Layout>
        <Media greaterThanOrEqual="tablet">
          <Container style={{ marginTop: 80 }}>
            <Grid columns={2} centered>
              <Grid.Column
                width={6}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Img fluid={data.flower.childImageSharp.fluid} />
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
                <p>Email: belombre@mweb.co.za</p>
                <p>Tel: +27 021 794 3461</p>
                <p>Cell: +27 083 794 3461</p>
              </Grid.Column>
              <Grid.Column>
                {showSuccess ? (
                  <>
                    <Message
                      header="Success!"
                      content="Your message was sent successfully. The Bel Ombre team will get back to you shortly"
                    />
                    <a href="/">
                      <Button primary>Back home</Button>
                    </a>
                  </>
                ) : (
                  <Segment style={{ padding: 30 }} className="contact">
                    <Header as="h3" textAlign="center" style={{ fontSize: 24 }}>
                      Send an enquiry
                    </Header>
                    {hasError && (
                      <Message
                        error
                        header="An error occurred"
                        content="Something went wrong. Please try to submit your request again"
                      />
                    )}

                    <Form onSubmit={submit} loading={isLoading}>
                      <Form.Field
                        error={getInputError({ hasBeenSubmitted, value: name })}
                        style={{ paddingBottom: 12 }}
                      >
                        <label>Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                          value={name}
                          style={{ borderColor: '#eaeaea' }}
                        />
                      </Form.Field>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ width: '48%' }}>
                          <Form.Field
                            style={{ paddingBottom: 24 }}
                            control={Input}
                            value={email}
                            label="Email"
                            error={getEmailError({ hasBeenSubmitted, email })}
                          >
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="jason@gmail.com"
                              style={{ borderColor: '#eaeaea' }}
                            />
                          </Form.Field>
                        </div>
                        <div style={{ width: '48%' }}>
                          <Form.Field
                            control={Input}
                            value={contact}
                            label="Contact number"
                          >
                            <input
                              onChange={(e) => setContact(e.target.value)}
                              placeholder="0831234567"
                              style={{ borderColor: '#eaeaea' }}
                            />
                          </Form.Field>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ width: '48%' }}>
                          <DateInput
                            name="date"
                            placeholder="Date"
                            value={arrival}
                            label="Arrival date"
                            iconPosition="left"
                            onChange={handleArrivalChange}
                          />
                        </div>
                        <div style={{ width: '48%', paddingBottom: 20 }}>
                          <DateInput
                            name="date"
                            placeholder="Date"
                            value={departure}
                            label="Departure date"
                            iconPosition="left"
                            onChange={handleDepartureChange}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ width: '48%' }}>
                          <Form.Field
                            style={{ paddingBottom: 24 }}
                            control={Input}
                            value={adults}
                            type="number"
                            label="Adults"
                          >
                            <input
                              onChange={(e) => setAdults(e.target.value)}
                              style={{ borderColor: '#eaeaea' }}
                            />
                          </Form.Field>
                        </div>
                        <div style={{ width: '48%' }}>
                          <Form.Field
                            control={Input}
                            type="number"
                            value={children}
                            label="Children"
                          >
                            <input
                              onChange={(e) => setChildren(e.target.value)}
                              style={{ borderColor: '#eaeaea' }}
                            />
                          </Form.Field>
                        </div>
                      </div>

                      <Form.Field
                        error={getInputError({
                          hasBeenSubmitted,
                          value: message,
                        })}
                      >
                        <label>Message</label>
                        <TextArea
                          value={message}
                          placeholder="Message"
                          onChange={(e) => setMessage(e.target.value)}
                          style={{ borderColor: '#eaeaea', marginBottom: 12 }}
                        />
                      </Form.Field>

                      <Button primary type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Segment>
                )}
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
                  7808
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
            <Img
              style={{ display: 'flex', margin: 'auto' }}
              fluid={data.flower.childImageSharp.fluid}
            />
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
            <p>Email: belombre@mweb.co.za</p>
            <p>Tel: +27 021 794 3461</p>
            <p>Cell: +27 083 794 3461</p>

            {showSuccess ? (
              <>
                <Message
                  header="Success!"
                  content="Your message was sent successfully. The Bel Ombre team will get back to you shortly."
                />
                <a href="/">
                  <Button primary>Back home</Button>
                </a>
              </>
            ) : (
              <Segment style={{ padding: 30 }} className="contact">
                <Header as="h3" textAlign="center" style={{ fontSize: 24 }}>
                  Send an enquiry
                </Header>
                {hasError && (
                  <Message
                    error
                    header="An error occurred"
                    content="Something went wrong. Please try to submit your request again"
                  />
                )}

                <Form onSubmit={submit} loading={isLoading}>
                  <Form.Field
                    error={getInputError({ hasBeenSubmitted, value: name })}
                    style={{ paddingBottom: 12 }}
                  >
                    <label>Name</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      value={name}
                      style={{ borderColor: '#eaeaea' }}
                    />
                  </Form.Field>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ width: '48%' }}>
                      <Form.Field
                        style={{ paddingBottom: 24 }}
                        control={Input}
                        value={email}
                        label="Email"
                        error={getEmailError({ hasBeenSubmitted, email })}
                      >
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jason@gmail.com"
                          style={{ borderColor: '#eaeaea' }}
                        />
                      </Form.Field>
                    </div>
                    <div style={{ width: '48%' }}>
                      <Form.Field
                        control={Input}
                        value={contact}
                        label="Contact number"
                      >
                        <input
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="0831234567"
                          style={{ borderColor: '#eaeaea' }}
                        />
                      </Form.Field>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ width: '48%', paddingBottom: 20 }}>
                      <DateInput
                        name="date"
                        placeholder="Date"
                        value={arrival}
                        label="Arrival date"
                        iconPosition="left"
                        onChange={handleArrivalChange}
                      />
                    </div>
                    <div style={{ width: '48%' }}>
                      <DateInput
                        name="date"
                        placeholder="Date"
                        value={departure}
                        label="Departure date"
                        iconPosition="left"
                        onChange={handleDepartureChange}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ width: '48%' }}>
                      <Form.Field
                        style={{ paddingBottom: 24 }}
                        control={Input}
                        value={adults}
                        type="number"
                        label="Adults"
                      >
                        <input
                          onChange={(e) => setAdults(e.target.value)}
                          // placeholder="jason@gmail.com"
                          style={{ borderColor: '#eaeaea' }}
                        />
                      </Form.Field>
                    </div>
                    <div style={{ width: '48%' }}>
                      <Form.Field
                        control={Input}
                        value={children}
                        type="number"
                        label="Children"
                      >
                        <input
                          onChange={(e) => setChildren(e.target.value)}
                          // placeholder="0831234567"
                          style={{ borderColor: '#eaeaea' }}
                        />
                      </Form.Field>
                    </div>
                  </div>

                  <Form.Field
                    error={getInputError({
                      hasBeenSubmitted,
                      value: message,
                    })}
                  >
                    <label>Message</label>
                    <TextArea
                      value={message}
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ borderColor: '#eaeaea', marginBottom: 12 }}
                    />
                  </Form.Field>

                  <Button primary type="submit">
                    Submit
                  </Button>
                </Form>
              </Segment>
            )}
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
              7808
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

export const query = graphql`
  query {
    flower: file(relativePath: { eq: "flower.png" }) {
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
