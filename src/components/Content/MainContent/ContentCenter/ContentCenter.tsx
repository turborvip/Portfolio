import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./index.scss";

import { BackgroundImage } from "@mantine/core";
import {avatar1} from '../../../../asset'

const content =
  "I'm a Web Developer.I have seriously started programming for 3 years and have 1 year of working experience. I can create Server, UI/UX layouts for any kind of website is required such as: portal, portfolio, e-commerce, dynamic websites, entertainment websites, educational websites, social websites.";
function ContentCenter() {
  return (
    <div className='content__center__wrapper'>
      <div className="head">
      <div className='image'>
        <BackgroundImage className="image__custom" src={avatar1}/>
      </div>
      <div className='content'>
        <div className="title__welcome">WELCOME!</div>
        <TypeAnimation
          sequence={[
            "I'AM A WEB DEVELOPER",
            1000,
            "I'AM A FULLSTACK DEVELOPER",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "1.8em" }}
          repeat={Infinity}
          className='typing'
        />
        <div className="description">{content}</div>
      </div>
      </div>
    </div>
  );
}

export default ContentCenter;
