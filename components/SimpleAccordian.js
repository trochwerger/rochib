"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function SimpleAccordion() {
  // State to track the active accordion item
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to handle accordion button click
  const handleAccordionChange = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <Flex minH={"100vh"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Container
        maxH={"20%  "}
        w={"100%"}
        py={12}
        px={{ base: 4, sm: 6, lg: 8 }}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={{ base: "none", sm: "lg" }}
        rounded={{ base: "none", sm: "lg" }}
      >
        <Accordion
          index={expandedIndex}
          onChange={handleAccordionChange}
          allowToggle
          width="100%"
          maxW="lg"
          rounded="lg"
        >
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onClick={() => handleAccordionChange(0)}
            >
              <Text fontSize="md">Equipment</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                When you choose RochIB, you&apos;re choosing reliability,
                expertise, and integrity. With years of industry experience and
                a reputation for excellence, we have earned the trust of clients
                across diverse sectors. From concept to completion, we&apos;re
                with you every step of the way, ensuring that your project is
                delivered on time, within budget, and to the highest standards
                of quality.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onClick={() => handleAccordionChange(1)}
            >
              <Text fontSize="md">Real Estate</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Our independent general contractor and construction consulting
                firm has the knowledge, experience and tools to make your
                projects a reality. Our team track record will provide you with
                the peace of mind that we have done challenging projects with
                outstanding results. Our goal is to understand your plan, be
                creative and find the best way to make your plan a reality to
                ensure your success.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              onClick={() => handleAccordionChange(2)}
            >
              <Text fontSize="md">Energy</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Our team has the knowledge, experience and tools to make your
                business thrive. Our track record will provide you with the
                peace of mind that we have done challenging businesses with
                outstanding results. Our goal is to be the bridge connecting
                your companies with other around the globe. We are a proud
                exclusive representative of Coil Solution in Latin America.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
