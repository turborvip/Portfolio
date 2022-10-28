import { Card, Col, Grid, Group, Text, Badge, Image, Button } from '@mantine/core'
import React from 'react'
import { useStore } from '../../../../store';
import './index.scss'

function Portfolio() {

  const [state,dispatch] = useStore();

  const services = state?.main.serviceContent.services;

  return (
    <div className='portfolio mb-1'>
      <div className='title'>
        <p>Portfolio</p>
      </div>
      <Grid grow gutter='xl' className='cards'>
        {services.map((service:any, idx:number) => (
          <Col key={idx} xs={12} md={3} lg={3} xl={3}>
            <Card
              className='card__portfolio'
              shadow='sm'
              p='lg'
              radius='md'
              withBorder
            >
              <Card.Section>
                <Image src={service.img} height={160} alt='Norway' />
              </Card.Section>

              <Group position='apart' mt='md' mb='xs'>
                <Text weight={500}>{service.title}</Text>
                <Badge
                  variant='gradient'
                  gradient={{ from: "orange", to: "red" }}
                >
                  {service.badge}
                </Badge>
              </Group>

              <Text size='sm' color='dimmed'>
                {service.description}
              </Text>

              <Button
                variant='light'
                color='blue'
                fullWidth
                mt='md'
                radius='md'
                className="card__footer"
              >
                {service.button}
              </Button>
            </Card>
          </Col>
        ))}
      </Grid>
    </div>
  )
}

export default Portfolio