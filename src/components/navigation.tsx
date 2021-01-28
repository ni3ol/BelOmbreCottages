import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Menu, Sidebar, Icon, Header, MenuItem } from 'semantic-ui-react';
import styles from './navigation.module.css';
import { Media } from '../media';

export default () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <Media greaterThan="mobile">
        <nav role="navigation">
          <ul className={styles.navigation}>
            <div>
              <li className={styles.navigationItem}>
                <Link to="/">Bel Ombre Cottages</Link>
              </li>
            </div>
            <div>
              <li className={styles.navigationItem}>
                <Link to="/accommodation">Accommodation</Link>
              </li>
              <li className={styles.navigationItem}>
                <Link to="/gallery/">Gallery</Link>
              </li>
              <li className={styles.navigationItem}>
                <Link to="/rates/">Rates</Link>
              </li>
              <li className={styles.navigationItem}>
                <Link to="/contact-us/">Contact us</Link>
              </li>
            </div>
          </ul>
        </nav>
      </Media>
      <Media at="mobile">
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          vertical
          visible={isVisible}
        >
          <Menu.Item>
            <div style={{ textAlign: 'end' }}>
              <Icon
                onClick={() => setVisible(!isVisible)}
                size="large"
                name="close"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
                fontWeight: 'bold',
                borderBottom: '1px solid',
              }}
            >
              <Link to="/">Bel Ombre Cottages</Link>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
              }}
            >
              <Link to="/accommodation">Accommodation</Link>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
              }}
            >
              <Link to="/gallery/">Gallery</Link>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
              }}
            >
              <Link to="/rates/">Rates</Link>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 20,
              }}
            >
              <Link to="/contact-us/">Contact us</Link>
            </div>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pushable>
          <Sidebar.Pusher
            dimmed={isVisible}
            onClick={isVisible ? () => setVisible(!isVisible) : undefined}
          >
            <Menu
              secondary
              style={{
                padding: 5,
              }}
            >
              <Menu.Item>
                <Link to="/">Bel Ombre Cottages</Link>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item
                  onClick={() => {
                    setVisible(!isVisible);
                  }}
                >
                  <Icon name="bars" />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    </>
  );
};
