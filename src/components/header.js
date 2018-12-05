import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink as Link } from 'react-router-dom';

import Routes from '../routes/routes';

class Header extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
          <Menu
            inverted
            size='huge'
            fixed='top'
            fluid
            widths={3}
            >

            <Menu.Item
              as={Link} to='/gallery' exact activeClassName="active"
              color='teal'
              name='gallery'
              active={activeItem === 'gallery'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link} to='/' exact activeClassName="active"
              color='teal'
              name='About'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              as={Link} to='/shop' exact activeClassName="active"
              color='teal'
              name='Shop'
              active={activeItem === 'shop'}
              onClick={this.handleItemClick}
            />

          </Menu>
          <Routes />
      </div>
    );
  }
}

export default Header;
