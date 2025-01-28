import {
  Badge,
  Box,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import React from 'react';

const BlogCard = ({ title, subtitle, author, category, img, onClick }: any) => {
  return (
    <Box>
      <UnstyledButton onClick={onClick}>
        <Paper>
          <Grid gutter={30}>
            <Grid.Col span={3}>
              <Box style={{ textAlign: 'right' }}>
                <Image radius="md" h={140} w="100%" fit="contain" src={img} />
              </Box>
            </Grid.Col>
            <Grid.Col span={9}>
              <Box>
                <Title order={3}>{title}</Title>
                <Text size="sm" mt={12}>
                  {subtitle}
                </Text>
                <Group align="center" mt={12}>
                  <Text size="xs" fw={600}>
                    {author}
                  </Text>
                  <Divider orientation="vertical" />
                  <Badge color="#07877b" size="sm">
                    {category}
                  </Badge>
                </Group>
              </Box>
            </Grid.Col>
          </Grid>
        </Paper>
      </UnstyledButton>
    </Box>
  );
};

export default BlogCard;
