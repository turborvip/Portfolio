import React from "react";
import "./index.scss";

import { Container, MantineProvider } from "@mantine/core";
import Head from "./Head/Head";
import Service from "./Service/Service";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

function index() {
  return (
    <div className='main__content__wrapper'>
      <MantineProvider
        theme={{
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1320,
                },
              },
            },
          },
        }}
      >
        <Container size='lg' className='content__center'>
          <Head />
          <About />
          <Service />
          <Portfolio />
        </Container>
      </MantineProvider>
    </div>
  );
}

export default index;
