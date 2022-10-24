import React from "react";
import "./index.scss";

import { Col, Grid } from "@mantine/core";

import ContentCenter from "./ContentCenter/ContentCenter";

function index() {
  return (
    <Grid className='main__content__wrapper' grow gutter='xs'>
      <Col md={3} lg={3} xl={2} className='content__left'>
      </Col>
      <Col  md={6} lg={6} xl={8} className='content__center'>
        <ContentCenter />
      </Col>
      <Col md={3} lg={3} xl={2} className='content__right'>
      </Col>
    </Grid>
  );
}

export default index;
