import "./index.scss";

import {useStore,actions} from '../../../../store'

import { BackgroundImage, Button, Col, Grid } from "@mantine/core";

function About() {
  const [state, dispatch] = useStore();
  const userInfo = state?.main.aboutContent.userInfo;
  const description = state?.main.aboutContent.description;
  const avatar2 = state?.main.aboutContent.avatar;
  const cv = state?.main.aboutContent.cv;

  return (
    <div className='about mb-1'>
      <div className="title"><p>About</p></div>
      <Grid>
        <Col xs={12} md={6} lg={6} xl={6} className='content'>
          <div className='title'>HELLO, I AM {userInfo.name}</div>
          <div className='description'>{description}</div>
          <div className='user__info'>
            <div className='fullname'>
              <label>Full name</label>
              <div>: {userInfo.fullname}</div>
            </div>
            <div className='age'>
              <label>Age</label>
              <div>: {userInfo.age}</div>
            </div>
            <div className='address'>
              <label>Address</label>
              <div>: {userInfo.address}</div>
            </div>
            <div className='phonenumber'>
              <label>Phone number</label>
              <div>: {userInfo.phone}</div>
            </div>
            <div className='gmail'>
              <label>Gmail</label>
              <div>: {userInfo.email}</div>
            </div>
          </div>
          <div className='download'>
            <a href={cv} target={'_blank'}>
              <Button>Download My CV</Button>
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6} xl={6} className='image'>
          <BackgroundImage className='image__custom' src={avatar2} />
        </Col>
      </Grid>
    </div>
  );
}

export default About;
