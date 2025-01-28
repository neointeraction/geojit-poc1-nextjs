import React from 'react';

import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import './FeaturesCards.css';

export default function FeaturesCards({
  superTitle,
  title,
  subtitle,
  data,
}: any) {
  const features = data.map((feature: any) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className="feature-card-card"
      padding="xl"
    >
      <feature.icon size={50} stroke={2} color={'#07877b'} />
      <Text fz="lg" fw={500} className="feature-card-cardTitle" mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg" color={'#07877b'}>
          {superTitle}
        </Badge>
      </Group>

      <Title order={2} className="feature-card-title" ta="center" mt="sm">
        {title}
      </Title>

      <Text c="dimmed" className="feature-card-description" ta="center" mt="md">
        {subtitle}
      </Text>

      <SimpleGrid cols={3} spacing="xl" className="feature-card-grid" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
