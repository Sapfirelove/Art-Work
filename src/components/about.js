import React from 'react';
import { Segment, Image, Grid, Container } from 'semantic-ui-react';

import Avatar from '../assets/images/avatar.png';

const About = () => {
  return (
    <div>
      <Grid columns='equal' style={{marginBottom:'8em'}}>
        <Grid.Row>
        <Grid.Column>
        </Grid.Column>
      <Grid.Column width={13}>
        <Segment
          size="large"
          inverted
          style={{marginTop:'5em'}}
          padded='very'
          fluid='true'
          >
            <Image src={Avatar}
              size='small'
              centered
              style={{marginBottom:'2em', border:'3px solid white', borderRadius:'50%'}}
            />
            <Container>
              <p>
                Hi, my name is <span style={{fontSize:"18px", color:"rgb(147, 250, 99)"}}>Martha</span>. I create artwork, but that is not all I can do.
                First, let me explain how I got into art. I've been drawing since I was able to hold a marker.
                Yes, my mother's wall was my canvas.
                It wasn't until I was in middle school that I became really serious about developing my artistic skills.
                I started showing off my artwork to others, gaining compliments from my peers. I later started exploring
                different mediums and found I was in love with watercolor.
              </p>
              <p>
              	After I graduated high school I had to decide my career, I wanted to do more with artistic skills.
                I combined my passion for computers with my artistic ability and became a Web Developer,
                by doing so I began coding in 2017 by learning HTML5 and CSS3.
              </p>
              <p>
                 Currently I am enrolled in WGU (Western Governor University) in their Information Technology
                 feild to learn more about other languages as well improving my skills in coding. I try to paint everyday
                 to let my creative juices flow.
              </p>
              <p>
                In case you were wondering, this website was created with a React Framework.
              </p>
            </Container>

        </Segment>
      </Grid.Column>
      <Grid.Column>

      </Grid.Column>
    </Grid.Row>
      </Grid>


    </div>
  );
}

export default About;
