"use client";

import React from "react";
import { IconPlus } from "@tabler/icons-react";
import { Accordion, Container, ThemeIcon, Title } from "@mantine/core";
import "./FAQ.css";

export default function FAQ({ data, title }: any) {
  return (
    <div className="faq-wrapper">
      <Container size="sm">
        <Title order={2} className="faq-title" ta="center" mt="sm" mb={20}>
          {title}
        </Title>
        <Accordion
          mt={40}
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" className="faq-gradient" size={26}>
              <IconPlus size={18} stroke={1.5} />
            </ThemeIcon>
          }
        >
          {data.map((faq: any, index: any) => (
            <Accordion.Item
              key={index}
              className="faq-item"
              value={faq.faqQuestion}
            >
              <Accordion.Control>{faq.faqQuestion}</Accordion.Control>
              <Accordion.Panel>{faq.faqAnswer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
