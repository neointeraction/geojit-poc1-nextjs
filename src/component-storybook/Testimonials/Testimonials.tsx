"use client";

import React from "react";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { Blockquote, Box, Container, Title } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";

const Testimonials = ({ data, title }: any) => {
  const icon = <IconMessage />;
  return (
    <Box>
      <Container fluid>
        <Title order={2} className="faq-title" ta="center" mt="sm" mb={20}>
          {title}
        </Title>
        <Carousel
          withIndicators
          height={200}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
          slidesToScroll={1}
        >
          {data.map((testimonial: any, index: any) => (
            <Carousel.Slide key={index}>
              <Blockquote
                color="#07877b"
                cite={testimonial.cite}
                icon={icon}
                my={20}
                style={{ minHeight: "500px" }}
              >
                {testimonial.quote}
              </Blockquote>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Testimonials;
