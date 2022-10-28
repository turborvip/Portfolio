import React from "react";
import "./index.scss";

import { TypeAnimation } from "react-type-animation";
import { useStore, actions } from "../../../../store";

import { BackgroundImage, Col, Grid } from "@mantine/core";

function Head() {
  const [state, dispatch] = useStore();
  const typing = state?.main.headContent.typing;
  const contact = state?.main.headContent.contact;
  const content = state?.main.headContent.content;
  const avatar1 = state?.main.headContent.avatar;

  return (
    <Grid className='head mb-1'>
      <Col xs={12} md={6} lg={6} xl={6} className='image'>
        <BackgroundImage className='image__custom' src={avatar1} />
      </Col>
      <Col xs={12} md={6} lg={6} xl={6} className='content'>
        <div className='title__welcome'>WELCOME!</div>
        <TypeAnimation
          sequence={typing}
          speed={50}
          repeat={Infinity}
          className='typing'
        />
        <div className='description'>{content}</div>
        <div className='contacts'>
          {contact.map((item: any, idx: number) => (
            <a key={idx} target={"_blank"} href={item.src}>
              {item.icon}
            </a>
          ))}
        </div>
      </Col>
    </Grid>
  );
}

export default Head;
