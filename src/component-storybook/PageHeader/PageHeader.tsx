import React from 'react';
import { Button, Container, Text, Title } from '@mantine/core';
import './PageHeader.css';

export default function PageHeader({ title, subtitle }: any) {
  return (
    <Container className="page-header-wrapper" size={1400}>
      <div className="page-header-inner">
        <Title className="page-header-title">{title}</Title>
        <Container p={0} size={600}>
          <Text size="lg" className="description">
            {subtitle}
          </Text>
        </Container>

        <div className="page-header-controls">
          <Button
            className="page-header-control"
            size="lg"
            variant="default"
            color={'#07877b'}
          >
            Learn more
          </Button>
          <Button className="page-header-control" size="lg" color={'#07877b'}>
            Purchase a license
          </Button>
        </div>
      </div>
    </Container>
  );
}
