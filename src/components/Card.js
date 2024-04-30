import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack background={"white"} color="black" borderRadius={6}>
      <Image src={imageSrc} borderRadius={6} />
      <VStack align='left' p={6}>
        <Heading size={16}>{title}</Heading>
        <Text opacity={0.5}>{description}</Text>
        <HStack>
          <Heading size={12}>See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
