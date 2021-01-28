/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Button, Container, Header, List } from 'semantic-ui-react';
import Map from '../images/map.svg';

const directions = [
  'Take the N2 from the Airport to Cape Town',
  'Take the M3 to Muizenberg – not the M5 (you pass the M5 turnoff)',
  'Pass the University of Cape Town and Rhodes Memorial on right',
  'Continue through Newlands, Bishopscourt down into Constantia Valley',
  'Take exit M41 to Plumstead/Constantia/Hout Bay',
  'Turn left into Constantia Main Road',
  'At the second set of traffic lights turn right into Brommersvlei Road',
  'Continue until you get to Rathfelder Avenue to your left',
  'The driveway entrance is at 99 Rathfelder Avenue to your left',
];

const RootIndex = () => {
  return (
    <Container>
      <Header style={{ marginTop: 20 }} as="h1">
        Bel Ombre Cottages Directions
      </Header>
      <List ordered size="big">
        {directions.map((item) => (
          <List.Item>{item}</List.Item>
        ))}
      </List>
      <Button
        style={{ marginBottom: 20 }}
        primary
        onClick={() => window.print()}
      >
        Print directions
      </Button>
      <img src={Map} />
    </Container>
  );
};

export default RootIndex;
