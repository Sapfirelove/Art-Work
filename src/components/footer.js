import React from 'react';
import {
  Container,
  Menu
} from 'semantic-ui-react';

class Footer extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (

    <div>
      <Container>
        <Menu
          inverted
          size='huge'
          fixed='bottom'
          widths={5}
          >

          <Menu.Item
            as='a'
            href='https://twitter.com/marthaschiebel'
            color='teal'
            target="/blank"
            active={activeItem === 'twitter'}
            onClick={this.handleItemClick}
          >
            <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
          </Menu.Item>

          <Menu.Item
            as='a'
            color='teal'
            href="https://www.instagram.com/marthaduzzart/"
            target="/blank"
            active={activeItem === 'instagram'}
            onClick={this.handleItemClick}
          >
            <i className="fa fa-instagram fa-3x" aria-hidden="true" />
          </Menu.Item>
            <p style={{padding:'2em'}}> © Martha 2018</p>
        </Menu>
      </Container>
    </div>
  );
}
}

export default Footer;
